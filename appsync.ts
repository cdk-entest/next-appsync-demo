export const config = {
  appsync_graphqlEndpoint: process.env.appsync_graphqlEndpoint,
  appsync_region: process.env.appsync_region,
  appsync_authenticationType: process.env.appsync_authenticationType,
  appsync_apiKey: process.env.appsync_apiKey,
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
