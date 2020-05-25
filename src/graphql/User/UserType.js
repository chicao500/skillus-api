import {gql} from "apollo-server"

export const userType = gql`
  type User {
    id: ID
    name: String
    email: String
    telephone: String
    date_creation: String
    skill: [Skill]
}
`;
