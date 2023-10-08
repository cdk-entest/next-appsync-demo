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

    // =========================Frontend=========================
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

    // ========================= DDB Table ========================
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

    // ============================ Resolver============================
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
