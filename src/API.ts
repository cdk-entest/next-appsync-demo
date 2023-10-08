/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type MessageInput = {
  id: string,
  content?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content?: string | null,
};

export type BookInput = {
  BookId: string,
  name?: string | null,
};

export type Book = {
  __typename: "Book",
  BookId: string,
  name?: string | null,
};

export type PaginatedMessages = {
  __typename: "PaginatedMessages",
  messages?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type AddMessageMutationVariables = {
  input?: MessageInput | null,
};

export type AddMessageMutation = {
  addMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
  } | null,
};

export type AddBookMutationVariables = {
  input?: BookInput | null,
};

export type AddBookMutation = {
  addBook?:  {
    __typename: "Book",
    BookId: string,
    name?: string | null,
  } | null,
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

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "PaginatedMessages",
    messages?:  Array< {
      __typename: "Message",
      id: string,
      content?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
