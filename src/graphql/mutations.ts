/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWhatsappUser = /* GraphQL */ `
  mutation CreateWhatsappUser(
    $input: CreateWhatsappUserInput!
    $condition: ModelWhatsappUserConditionInput
  ) {
    createWhatsappUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateWhatsappUser = /* GraphQL */ `
  mutation UpdateWhatsappUser(
    $input: UpdateWhatsappUserInput!
    $condition: ModelWhatsappUserConditionInput
  ) {
    updateWhatsappUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteWhatsappUser = /* GraphQL */ `
  mutation DeleteWhatsappUser(
    $input: DeleteWhatsappUserInput!
    $condition: ModelWhatsappUserConditionInput
  ) {
    deleteWhatsappUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      createdAt
      updatedAt
    }
  }
`;
