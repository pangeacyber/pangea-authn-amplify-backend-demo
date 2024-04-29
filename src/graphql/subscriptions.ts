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
