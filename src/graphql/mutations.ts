/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addMessage =
  /* GraphQL */ `mutation AddMessage($id: ID, $content: String) {
  addMessage(id: $id, content: $content) {
    id
    content
    __typename
  }
}
` as GeneratedMutation<
    APITypes.AddMessageMutationVariables,
    APITypes.AddMessageMutation
  >;
export const addBook = /* GraphQL */ `mutation AddBook(
  $id: ID
  $title: String
  $author: String
  $description: String
  $order: Int
  $url: String
  $amazon: String
  $image: String
) {
  addBook(
    id: $id
    title: $title
    author: $author
    description: $description
    order: $order
    url: $url
    amazon: $amazon
    image: $image
  ) {
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
` as GeneratedMutation<
  APITypes.AddBookMutationVariables,
  APITypes.AddBookMutation
>;
