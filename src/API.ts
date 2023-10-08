/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Book = {
  __typename: "Book",
  BookId: string,
  name?: string | null,
};

export type GetOneQueryVariables = {
  BookId: string,
};

export type GetOneQuery = {
  getOne?:  {
    __typename: "Book",
    BookId: string,
    name?: string | null,
  } | null,
};

export type ListBooksQuery = {
  listBooks?:  Array< {
    __typename: "Book",
    BookId: string,
    name?: string | null,
  } | null > | null,
};
