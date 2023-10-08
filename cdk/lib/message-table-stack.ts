import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_dynamodb, RemovalPolicy, aws_appsync } from "aws-cdk-lib";

interface MessageTableProps extends StackProps {
  apiId: string;
  roleArn: string;
}

export class MessaegTableStack extends Stack {
  constructor(scope: Construct, id: string, props: MessageTableProps) {
    super(scope, id, props);

    const messageTable = new aws_dynamodb.Table(this, "MessageTable", {
      tableName: "Message",
      partitionKey: {
        name: "id",
        type: aws_dynamodb.AttributeType.STRING,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const messageDataSource = new aws_appsync.CfnDataSource(
      this,
      "MessageDataSource",
      {
        apiId: props.apiId,
        name: "MessageDataSource",
        type: "AMAZON_DYNAMODB",
        dynamoDbConfig: {
          tableName: messageTable.tableName,
          awsRegion: this.region,
        },
        serviceRoleArn: props.roleArn,
      }
    );

    const getMessageResolver = new aws_appsync.CfnResolver(
      this,
      "GetMessageResolver",
      {
        apiId: props.apiId,
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
        apiId: props.apiId,
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

    getMessageResolver.addDependency(messageDataSource);
    listMessagesResolver.addDependency(messageDataSource);
  }
}
