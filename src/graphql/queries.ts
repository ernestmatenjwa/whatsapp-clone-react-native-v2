/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWhatsappUser = /* GraphQL */ `
  query GetWhatsappUser($id: ID!) {
    getWhatsappUser(id: $id) {
      id
      name
      imageUri
      status
      createdAt
      updatedAt
    }
  }
`;
export const listWhatsappUsers = /* GraphQL */ `
  query ListWhatsappUsers(
    $filter: ModelWhatsappUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWhatsappUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
