/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateICECREAM = /* GraphQL */ `subscription OnCreateICECREAM($filter: ModelSubscriptionICECREAMFilterInput) {
  onCreateICECREAM(filter: $filter) {
    id
    email
    flavor
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateICECREAMSubscriptionVariables,
  APITypes.OnCreateICECREAMSubscription
>;
export const onUpdateICECREAM = /* GraphQL */ `subscription OnUpdateICECREAM($filter: ModelSubscriptionICECREAMFilterInput) {
  onUpdateICECREAM(filter: $filter) {
    id
    email
    flavor
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateICECREAMSubscriptionVariables,
  APITypes.OnUpdateICECREAMSubscription
>;
export const onDeleteICECREAM = /* GraphQL */ `subscription OnDeleteICECREAM($filter: ModelSubscriptionICECREAMFilterInput) {
  onDeleteICECREAM(filter: $filter) {
    id
    email
    flavor
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteICECREAMSubscriptionVariables,
  APITypes.OnDeleteICECREAMSubscription
>;
export const onCreateSOFETCHDB = /* GraphQL */ `subscription OnCreateSOFETCHDB($filter: ModelSubscriptionSOFETCHDBFilterInput) {
  onCreateSOFETCHDB(filter: $filter) {
    id
    name
    burn
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSOFETCHDBSubscriptionVariables,
  APITypes.OnCreateSOFETCHDBSubscription
>;
export const onUpdateSOFETCHDB = /* GraphQL */ `subscription OnUpdateSOFETCHDB($filter: ModelSubscriptionSOFETCHDBFilterInput) {
  onUpdateSOFETCHDB(filter: $filter) {
    id
    name
    burn
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSOFETCHDBSubscriptionVariables,
  APITypes.OnUpdateSOFETCHDBSubscription
>;
export const onDeleteSOFETCHDB = /* GraphQL */ `subscription OnDeleteSOFETCHDB($filter: ModelSubscriptionSOFETCHDBFilterInput) {
  onDeleteSOFETCHDB(filter: $filter) {
    id
    name
    burn
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSOFETCHDBSubscriptionVariables,
  APITypes.OnDeleteSOFETCHDBSubscription
>;
