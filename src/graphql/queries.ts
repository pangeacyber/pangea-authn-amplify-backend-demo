/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getICECREAM = /* GraphQL */ `query GetICECREAM($id: ID!) {
  getICECREAM(id: $id) {
    id
    email
    flavor
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetICECREAMQueryVariables,
  APITypes.GetICECREAMQuery
>;
export const listICECREAMS = /* GraphQL */ `query ListICECREAMS(
  $filter: ModelICECREAMFilterInput
  $limit: Int
  $nextToken: String
) {
  listICECREAMS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      flavor
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListICECREAMSQueryVariables,
  APITypes.ListICECREAMSQuery
>;
export const getSOFETCHDB = /* GraphQL */ `query GetSOFETCHDB($id: ID!) {
  getSOFETCHDB(id: $id) {
    id
    name
    burn
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSOFETCHDBQueryVariables,
  APITypes.GetSOFETCHDBQuery
>;
export const listSOFETCHDBS = /* GraphQL */ `query ListSOFETCHDBS(
  $filter: ModelSOFETCHDBFilterInput
  $limit: Int
  $nextToken: String
) {
  listSOFETCHDBS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      burn
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSOFETCHDBSQueryVariables,
  APITypes.ListSOFETCHDBSQuery
>;
