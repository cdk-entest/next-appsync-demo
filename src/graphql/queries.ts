/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getImage = /* GraphQL */ `query GetImage($id: ID!) {
  getImage(id: $id) {
    id
    name
    title
    __typename
  }
}
` as GeneratedQuery<APITypes.GetImageQueryVariables, APITypes.GetImageQuery>;
export const listImages =
  /* GraphQL */ `query ListImages($limit: Int, $nextToken: String) {
  listImages(limit: $limit, nextToken: $nextToken) {
    images {
      id
      name
      title
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListImagesQueryVariables,
    APITypes.ListImagesQuery
  >;
export const getBook = /* GraphQL */ `query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    title
    author
    description
    order
    url
    amazon
    image
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBookQueryVariables, APITypes.GetBookQuery>;
export const listBooks = /* GraphQL */ `query ListBooks {
  listBooks {
    id
    title
    author
    description
    order
    url
    amazon
    image
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBooksQueryVariables, APITypes.ListBooksQuery>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    content
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages =
  /* GraphQL */ `query ListMessages($limit: Int, $nextToken: String) {
  listMessages(limit: $limit, nextToken: $nextToken) {
    messages {
      id
      content
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListMessagesQueryVariables,
    APITypes.ListMessagesQuery
  >;
