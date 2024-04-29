/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateICECREAMInput = {
  id?: string | null,
  email?: string | null,
  flavor?: string | null,
};

export type ModelICECREAMConditionInput = {
  email?: ModelStringInput | null,
  flavor?: ModelStringInput | null,
  and?: Array< ModelICECREAMConditionInput | null > | null,
  or?: Array< ModelICECREAMConditionInput | null > | null,
  not?: ModelICECREAMConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type ICECREAM = {
  __typename: "ICECREAM",
  id: string,
  email?: string | null,
  flavor?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateICECREAMInput = {
  id: string,
  email?: string | null,
  flavor?: string | null,
};

export type DeleteICECREAMInput = {
  id: string,
};

export type ModelICECREAMFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  flavor?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelICECREAMFilterInput | null > | null,
  or?: Array< ModelICECREAMFilterInput | null > | null,
  not?: ModelICECREAMFilterInput | null,
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

export type ModelICECREAMConnection = {
  __typename: "ModelICECREAMConnection",
  items:  Array<ICECREAM | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionICECREAMFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  flavor?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionICECREAMFilterInput | null > | null,
  or?: Array< ModelSubscriptionICECREAMFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateICECREAMMutationVariables = {
  input: CreateICECREAMInput,
  condition?: ModelICECREAMConditionInput | null,
};

export type CreateICECREAMMutation = {
  createICECREAM?:  {
    __typename: "ICECREAM",
    id: string,
    email?: string | null,
    flavor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateICECREAMMutationVariables = {
  input: UpdateICECREAMInput,
  condition?: ModelICECREAMConditionInput | null,
};

export type UpdateICECREAMMutation = {
  updateICECREAM?:  {
    __typename: "ICECREAM",
    id: string,
    email?: string | null,
    flavor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteICECREAMMutationVariables = {
  input: DeleteICECREAMInput,
  condition?: ModelICECREAMConditionInput | null,
};

export type DeleteICECREAMMutation = {
  deleteICECREAM?:  {
    __typename: "ICECREAM",
    id: string,
    email?: string | null,
    flavor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetICECREAMQueryVariables = {
  id: string,
};

export type GetICECREAMQuery = {
  getICECREAM?:  {
    __typename: "ICECREAM",
    id: string,
    email?: string | null,
    flavor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListICECREAMSQueryVariables = {
  filter?: ModelICECREAMFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListICECREAMSQuery = {
  listICECREAMS?:  {
    __typename: "ModelICECREAMConnection",
    items:  Array< {
      __typename: "ICECREAM",
      id: string,
      email?: string | null,
      flavor?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateICECREAMSubscriptionVariables = {
  filter?: ModelSubscriptionICECREAMFilterInput | null,
};

export type OnCreateICECREAMSubscription = {
  onCreateICECREAM?:  {
    __typename: "ICECREAM",
    id: string,
    email?: string | null,
    flavor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateICECREAMSubscriptionVariables = {
  filter?: ModelSubscriptionICECREAMFilterInput | null,
};

export type OnUpdateICECREAMSubscription = {
  onUpdateICECREAM?:  {
    __typename: "ICECREAM",
    id: string,
    email?: string | null,
    flavor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteICECREAMSubscriptionVariables = {
  filter?: ModelSubscriptionICECREAMFilterInput | null,
};

export type OnDeleteICECREAMSubscription = {
  onDeleteICECREAM?:  {
    __typename: "ICECREAM",
    id: string,
    email?: string | null,
    flavor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
