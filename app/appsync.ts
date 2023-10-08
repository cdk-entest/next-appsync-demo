export const config = {
  aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
  aws_appsync_region: process.env.aws_appsync_region,
  aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
  aws_appsync_apiKey: process.env.aws_appsync_apiKey,
};

export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  order: Number;
  url: string;
  amazon: string;
  image: string;
};
