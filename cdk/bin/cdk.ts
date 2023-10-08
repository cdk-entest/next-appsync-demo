#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AppsyncStack } from "../lib/appsync-stack";
import { MessaegTableStack } from "../lib/message-table-stack";
import { BookTableStack } from "../lib/book-table-stack";

const app = new cdk.App();

const appsync = new AppsyncStack(app, "AppsyncDDBStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-east-1",
  },
});

new MessaegTableStack(app, "MessageTableStack", {
  roleArn: appsync.roleArn,
  apiId: appsync.apiId,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-east-1",
  },
});

new BookTableStack(app, "BookTableStack", {
  roleArn: appsync.roleArn,
  apiId: appsync.apiId,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-east-1",
  },
});
