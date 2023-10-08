import { Stack, StackProps, aws_appsync, aws_iam } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";
import * as fs from "fs";

export class AppsyncStack extends Stack {
  public readonly apiId: string;
  public readonly roleArn: string;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const appsyncApi = new aws_appsync.CfnGraphQLApi(this, "nextappsync", {
      name: "nextappsync",
      authenticationType: "API_KEY",
    });

    new aws_appsync.CfnApiKey(this, "ItemsApiKey", {
      apiId: appsyncApi.attrApiId,
    });

    new aws_appsync.CfnGraphQLSchema(this, "ItemsSchema", {
      apiId: appsyncApi.attrApiId,
      definition: fs.readFileSync(
        path.resolve(__dirname, "./../config/schema.graphql"),
        { encoding: "utf-8" }
      ),
    });

    const role = new aws_iam.Role(this, "RoleForAppSyncAccessDDB", {
      assumedBy: new aws_iam.ServicePrincipal("appsync.amazonaws.com"),
      roleName: "RoleForAppSyncAccessDDB",
    });

    role.addManagedPolicy(
      aws_iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonDynamoDBFullAccess")
    );

    this.roleArn = role.roleArn;
    this.apiId = appsyncApi.attrApiId;
  }
}
