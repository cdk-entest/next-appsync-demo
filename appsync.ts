export const config = {
  aws_appsync_graphqlEndpoint:
    "https://23eu6xmhcndzhjih3csupjptru.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-w4mxcx34f5h3hhki4uhszwjtny",
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
