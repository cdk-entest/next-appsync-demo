export const config = {
  appsync_graphqlEndpoint:
    "https://23eu6xmhcndzhjih3csupjptru.appsync-api.us-east-1.amazonaws.com/graphql",
  appsync_region: "us-east-1",
  appsync_authenticationType: "API_KEY",
  appsync_apiKey: "da2-w4mxcx34f5h3hhki4uhszwjtny",
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
