/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addMessage = /* GraphQL */ `mutation AddMessage($input: MessageInput) {
  addMessage(input: $input) {
    id
    content
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddMessageMutationVariables,
  APITypes.AddMessageMutation
>;
export const addBook = /* GraphQL */ `mutation AddBook($input: BookInput) {
  addBook(input: $input) {
    BookId
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddBookMutationVariables,
  APITypes.AddBookMutation
>;
