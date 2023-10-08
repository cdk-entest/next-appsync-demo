---
title: develop a next app with appsync
author: haimtran
publishedDate: 08/10/2023
---

## Appsync API

First let create a schema.graphql

```sql
type Book {
  BookId: ID!
  name: String
}

input BookInput {
  BookId: ID!
  name: String
}

type Message {
  id: ID!
  content: String
}

input MessageInput {
  id: ID!
  content: String
}

type PaginatedMessages {
  messages: [Message]
  nextToken: String
}

type Schema {
  query: Query
  mutation: Mutation
}

type Mutation {
  addMessage(input: MessageInput): Message
  addBook(input: BookInput): Book
}

type Query {
  getOne(BookId: ID!): Book
  listBooks: [Book]
  getMessage(id: ID!): Message
  listMessages(limit: Int, nextToken: String): PaginatedMessages
}
```

Then, let create an appsync api stack

```ts
import {
  Stack,
  StackProps,
  aws_dynamodb,
  RemovalPolicy,
  aws_appsync,
  aws_iam,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";
import * as fs from "fs";

export class AppsyncDDBStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const tableName = "Book";

    // appsync app
    const itemsGraphQLApi = new aws_appsync.CfnGraphQLApi(this, "ItemsApi", {
      name: "items-api",
      authenticationType: "API_KEY",
    });

    // api key
    new aws_appsync.CfnApiKey(this, "ItemsApiKey", {
      apiId: itemsGraphQLApi.attrApiId,
    });

    // schema
    const apiSchema = new aws_appsync.CfnGraphQLSchema(this, "ItemsSchema", {
      apiId: itemsGraphQLApi.attrApiId,
      definition: fs.readFileSync(
        path.resolve(__dirname, "./../config/schema.graphql"),
        { encoding: "utf-8" }
      ),
    });

    // book table
    const itemsTable = new aws_dynamodb.Table(this, "ItemsTable", {
      tableName: tableName,
      partitionKey: {
        name: `${tableName}Id`,
        type: aws_dynamodb.AttributeType.STRING,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // message table
    const messageTable = new aws_dynamodb.Table(this, "MessageTable", {
      tableName: "Message",
      partitionKey: {
        name: "id",
        type: aws_dynamodb.AttributeType.STRING,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // ======================== Data Sources==============================
    // appsync datasource
    const role = new aws_iam.Role(this, "ItemsDynamoDBRole", {
      assumedBy: new aws_iam.ServicePrincipal("appsync.amazonaws.com"),
      roleName: "ItemsDynamoDBRole",
    });

    role.addManagedPolicy(
      aws_iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonDynamoDBFullAccess")
    );

    const dataSource = new aws_appsync.CfnDataSource(this, "ItemsDataSource", {
      apiId: itemsGraphQLApi.attrApiId,
      name: "ItemsDataSource",
      type: "AMAZON_DYNAMODB",
      dynamoDbConfig: {
        tableName: itemsTable.tableName,
        awsRegion: this.region,
      },
      serviceRoleArn: role.roleArn,
    });

    const messageDataSource = new aws_appsync.CfnDataSource(
      this,
      "MessageDataSource",
      {
        apiId: itemsGraphQLApi.attrApiId,
        name: "MessageDataSource",
        type: "AMAZON_DYNAMODB",
        dynamoDbConfig: {
          tableName: messageTable.tableName,
          awsRegion: this.region,
        },
        serviceRoleArn: role.roleArn,
      }
    );

    // get one item resolver
    const getOneResolver = new aws_appsync.CfnResolver(this, "GetOneResolver", {
      apiId: itemsGraphQLApi.attrApiId,
      typeName: "Query",
      fieldName: "getOne",
      dataSourceName: dataSource.name,
      requestMappingTemplate: `{
        "version": "2017-02-28",
        "operation": "GetItem",
        "key": {
          "${tableName}Id": $util.dynamodb.toDynamoDBJson($ctx.args.${tableName}Id)
        }
      }`,
      responseMappingTemplate: `$util.toJson($ctx.result)`,
    });

    // listBooks resolver
    const listBooksResolver = new aws_appsync.CfnResolver(
      this,
      "ListBooksResolver",
      {
        apiId: itemsGraphQLApi.attrApiId,
        typeName: "Query",
        fieldName: "listBooks",
        dataSourceName: dataSource.name,
        requestMappingTemplate: `{
          "version": "2017-02-28",
          "operation": "Scan"
        }`,
        responseMappingTemplate: `$util.toJson($ctx.result.items)`,
      }
    );

    const getMessageResolver = new aws_appsync.CfnResolver(
      this,
      "GetMessageResolver",
      {
        apiId: itemsGraphQLApi.attrApiId,
        typeName: "Query",
        fieldName: "getMessage",
        dataSourceName: messageDataSource.name,
        runtime: {
          name: "APPSYNC_JS",
          runtimeVersion: "1.0.0",
        },
        code: `
        import * as ddb from '@aws-appsync/utils/dynamodb'
        export function request(ctx) {
        	return ddb.get({ key: { id: ctx.args.id } })
        }
        export const response = (ctx) => ctx.result
      `,
      }
    );

    const listMessagesResolver = new aws_appsync.CfnResolver(
      this,
      "ListMessagesResolver",
      {
        apiId: itemsGraphQLApi.attrApiId,
        typeName: "Query",
        fieldName: "listMessages",
        dataSourceName: messageDataSource.name,
        runtime: {
          name: "APPSYNC_JS",
          runtimeVersion: "1.0.0",
        },
        code: `
        import * as ddb from '@aws-appsync/utils/dynamodb';
        export function request(ctx) {
          const { limit = 20, nextToken } = ctx.arguments;
          return ddb.scan({ limit, nextToken });
        }
        export function response(ctx) {
          const { items: messages = [], nextToken } = ctx.result;
          return { messages, nextToken };
        }`,
      }
    );

    getOneResolver.addDependency(apiSchema);
    getOneResolver.addDependency(dataSource);

    listBooksResolver.addDependency(apiSchema);
    listBooksResolver.addDependency(dataSource);

    getMessageResolver.addDependency(apiSchema);
    getMessageResolver.addDependency(messageDataSource);

    listMessagesResolver.addDependency(apiSchema);
    listMessagesResolver.addDependency(messageDataSource);
  }
}
```

## Client Setup

Then generate queries command typescript

```bash
npm install -g @aws-amplify/cli
amplify add codegen --apiId tyweijjzgvfqjeqqat52natp4m
amplify codegen
```

Create configure for Amplify

```ts
import { getOne, listBooks } from "@/src/graphql/queries";
import { API } from "@aws-amplify/api";

const config = {
  aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
  aws_appsync_region: process.env.aws_appsync_region,
  aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
  aws_appsync_apiKey: process.env.aws_appsync_apiKey,
};

API.configure(config);

type Book = {
  BookId: string;
  name: string;
};

const getBook = async () => {
  "use server";
  const response = (await API.graphql({
    query: getOne,
    variables: {
      BookId: "111",
    },
  })) as any;

  console.log(response);

  return response;
};

const getBooks = async () => {
  "use server";

  const response = (await API.graphql({
    query: listBooks,
  })) as any;

  const books = response.data.listBooks as [Book];

  console.log(books);
  return response.data.listBooks as [Book];
};

const Home = async () => {
  const book = await getBook();
  const books = await getBooks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>Hello Hai {book ? book.data.getOne.name : "error"}</div>
        <div>
          {books
            ? books.map((item, id) => <div key={id}>{item.name}</div>)
            : "error"}
        </div>
      </div>
    </main>
  );
};

export default Home;
```

Similarly, let build a message page

```ts
import { getOne, listBooks, listMessages } from "@/src/graphql/queries";
import { API } from "@aws-amplify/api";

const config = {
  aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
  aws_appsync_region: process.env.aws_appsync_region,
  aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
  aws_appsync_apiKey: process.env.aws_appsync_apiKey,
};

API.configure(config);

type Message = {
  id: string;
  content: string;
};

const getMessages = async () => {
  "use server";

  const response = (await API.graphql({
    query: listMessages,
    variables: {
      limit: 10,
    },
  })) as any;

  const messages = response.data.listMessages.messages as [Message];

  console.log(messages);

  return messages;
};

const Home = async () => {
  const messages = await getMessages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {messages
          ? messages.map((item, id) => <div key={id}>Hello {item.content}</div>)
          : "error"}
      </div>
    </main>
  );
};

export default Home;
```

## Reference

- [ddb resolver example](https://docs.aws.amazon.com/appsync/latest/devguide/tutorial-dynamodb-resolvers.html)

- [build client app](https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app.html)
