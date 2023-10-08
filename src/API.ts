/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Message = {
  __typename: "Message",
  id: string,
  content?: string | null,
};

export type Book = {
  __typename: "Book",
  id: string,
  title?: string | null,
  author?: string | null,
  description?: string | null,
  order?: number | null,
  url?: string | null,
  amazon?: string | null,
  image?: string | null,
};

export type PaginatedMessages = {
  __typename: "PaginatedMessages",
  messages?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type AddMessageMutationVariables = {
  id?: string | null,
  content?: string | null,
};

export type AddMessageMutation = {
  addMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
  } | null,
};

export type AddBookMutationVariables = {
  id?: string | null,
  title?: string | null,
  author?: string | null,
  description?: string | null,
  order?: number | null,
  url?: string | null,
  amazon?: string | null,
  image?: string | null,
};

export type AddBookMutation = {
  addBook?:  {
    __typename: "Book",
    id: string,
    title?: string | null,
    author?: string | null,
    description?: string | null,
    order?: number | null,
    url?: string | null,
    amazon?: string | null,
    image?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    title?: string | null,
    author?: string | null,
    description?: string | null,
    order?: number | null,
    url?: string | null,
    amazon?: string | null,
    image?: string | null,
  } | null,
};

export type ListBooksQuery = {
  listBooks?:  Array< {
    __typename: "Book",
    id: string,
    title?: string | null,
    author?: string | null,
    description?: string | null,
    order?: number | null,
    url?: string | null,
    amazon?: string | null,
    image?: string | null,
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
