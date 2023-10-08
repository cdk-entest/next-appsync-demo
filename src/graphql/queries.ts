/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOne = /* GraphQL */ `query GetOne($BookId: ID!) {
  getOne(BookId: $BookId) {
    BookId
    name
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOneQueryVariables, APITypes.GetOneQuery>;
export const listBooks = /* GraphQL */ `query ListBooks {
  listBooks {
    BookId
    name
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBooksQueryVariables, APITypes.ListBooksQuery>;
