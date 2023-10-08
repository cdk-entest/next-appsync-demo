import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_dynamodb, RemovalPolicy, aws_appsync } from "aws-cdk-lib";

interface BookTableProps extends StackProps {
  apiId: string;
  roleArn: string;
}

export class BookTableStack extends Stack {
  constructor(scope: Construct, id: string, props: BookTableProps) {
    super(scope, id, props);

    const bookTable = new aws_dynamodb.Table(this, "BookTable", {
      tableName: "Book",
      partitionKey: {
        name: "id",
        type: aws_dynamodb.AttributeType.STRING,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const bookDataSource = new aws_appsync.CfnDataSource(
      this,
      "BookDataSource",
      {
        apiId: props.apiId,
        name: "BookDataSource",
        type: "AMAZON_DYNAMODB",
        dynamoDbConfig: {
          tableName: bookTable.tableName,
          awsRegion: this.region,
        },
        serviceRoleArn: props.roleArn,
      }
    );

    const getBookResolver = new aws_appsync.CfnResolver(
      this,
      "GetBookResolver",
      {
        apiId: props.apiId,
        typeName: "Query",
        fieldName: "getBook",
        dataSourceName: bookDataSource.name,
        requestMappingTemplate: `{
        "version": "2017-02-28",
        "operation": "GetItem",
        "key": {
          "id": $util.dynamodb.toDynamoDBJson($ctx.args.id)
        }
      }`,
        responseMappingTemplate: `$util.toJson($ctx.result)`,
      }
    );

    const listBooksResolver = new aws_appsync.CfnResolver(
      this,
      "ListBooksResolver",
      {
        apiId: props.apiId,
        typeName: "Query",
        fieldName: "listBooks",
        dataSourceName: bookDataSource.name,
        requestMappingTemplate: `{
          "version": "2017-02-28",
          "operation": "Scan"
        }`,
        responseMappingTemplate: `$util.toJson($ctx.result.items)`,
      }
    );

    const addBookResolver = new aws_appsync.CfnResolver(this, "AddBook", {
      apiId: props.apiId,
      typeName: "Mutation",
      fieldName: "addBook",
      dataSourceName: bookDataSource.name,
      runtime: {
        name: "APPSYNC_JS",
        runtimeVersion: "1.0.0",
      },
      code: `
      import { util } from '@aws-appsync/utils'
      import * as ddb from '@aws-appsync/utils/dynamodb'

      export function request(ctx) {
    	  const item = { ...ctx.arguments }
    	  const key = { id: ctx.args.id ?? util.autoId() }
    	  return ddb.put({ key, item })
      }

      export function response(ctx) {
       	return ctx.result
      }`,
    });

    getBookResolver.addDependency(bookDataSource);
    listBooksResolver.addDependency(bookDataSource);
    addBookResolver.addDependency(bookDataSource);
  }
}
