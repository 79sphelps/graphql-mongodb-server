export default `
  type User {
    _id: String!
    name: String!
    editable: Boolean!
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(_id: String!, user: UpdateUserInput!): User!
    deleteUser(_id: String!): User!
  }

  input CreateUserInput {
    _id: String!
    name: String!
    editable: Boolean!
  }
  
  input UpdateUserInput {
    name: String
    editable: Boolean
  } 
`;
