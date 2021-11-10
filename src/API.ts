/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWhatsappUserInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  status?: string | null,
};

export type ModelWhatsappUserConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelWhatsappUserConditionInput | null > | null,
  or?: Array< ModelWhatsappUserConditionInput | null > | null,
  not?: ModelWhatsappUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type WhatsappUser = {
  __typename: "WhatsappUser",
  id: string,
  name: string,
  imageUri?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWhatsappUserInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  status?: string | null,
};

export type DeleteWhatsappUserInput = {
  id: string,
};

export type ModelWhatsappUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelWhatsappUserFilterInput | null > | null,
  or?: Array< ModelWhatsappUserFilterInput | null > | null,
  not?: ModelWhatsappUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWhatsappUserConnection = {
  __typename: "ModelWhatsappUserConnection",
  items?:  Array<WhatsappUser | null > | null,
  nextToken?: string | null,
};

export type CreateWhatsappUserMutationVariables = {
  input: CreateWhatsappUserInput,
  condition?: ModelWhatsappUserConditionInput | null,
};

export type CreateWhatsappUserMutation = {
  createWhatsappUser?:  {
    __typename: "WhatsappUser",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWhatsappUserMutationVariables = {
  input: UpdateWhatsappUserInput,
  condition?: ModelWhatsappUserConditionInput | null,
};

export type UpdateWhatsappUserMutation = {
  updateWhatsappUser?:  {
    __typename: "WhatsappUser",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWhatsappUserMutationVariables = {
  input: DeleteWhatsappUserInput,
  condition?: ModelWhatsappUserConditionInput | null,
};

export type DeleteWhatsappUserMutation = {
  deleteWhatsappUser?:  {
    __typename: "WhatsappUser",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWhatsappUserQueryVariables = {
  id: string,
};

export type GetWhatsappUserQuery = {
  getWhatsappUser?:  {
    __typename: "WhatsappUser",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWhatsappUsersQueryVariables = {
  filter?: ModelWhatsappUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWhatsappUsersQuery = {
  listWhatsappUsers?:  {
    __typename: "ModelWhatsappUserConnection",
    items?:  Array< {
      __typename: "WhatsappUser",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWhatsappUserSubscription = {
  onCreateWhatsappUser?:  {
    __typename: "WhatsappUser",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWhatsappUserSubscription = {
  onUpdateWhatsappUser?:  {
    __typename: "WhatsappUser",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWhatsappUserSubscription = {
  onDeleteWhatsappUser?:  {
    __typename: "WhatsappUser",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
