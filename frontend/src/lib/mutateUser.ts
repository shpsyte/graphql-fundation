import { gql } from "@apollo/client";

export const CREATE_USER = gql` 

mutation ($name: String!) {
  createUser(name: $name) {
    users {
      id
      name
    }
}
`;
