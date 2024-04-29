/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createICECREAM = /* GraphQL */ `mutation CreateICECREAM(
  $input: CreateICECREAMInput!
  $condition: ModelICECREAMConditionInput
) {
  createICECREAM(input: $input, condition: $condition) {
    id
    email
    flavor
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateICECREAMMutationVariables,
  APITypes.CreateICECREAMMutation
>;
export const updateICECREAM = /* GraphQL */ `mutation UpdateICECREAM(
  $input: UpdateICECREAMInput!
  $condition: ModelICECREAMConditionInput
) {
  updateICECREAM(input: $input, condition: $condition) {
    id
    email
    flavor
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateICECREAMMutationVariables,
  APITypes.UpdateICECREAMMutation
>;
export const deleteICECREAM = /* GraphQL */ `mutation DeleteICECREAM(
  $input: DeleteICECREAMInput!
  $condition: ModelICECREAMConditionInput
) {
  deleteICECREAM(input: $input, condition: $condition) {
    id
    email
    flavor
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteICECREAMMutationVariables,
  APITypes.DeleteICECREAMMutation
>;
