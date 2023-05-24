const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload

  type User {
    username: String
    password: String
    email: String
    image: String
    publications: Int
    followers: Int
    followed: Int
    description: String
    id: Int
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    getUserByEmail(email: String!): User
    loginUser(email: String!, password: String!): User
  }

  type Mutation {
    registrerUser(email: String!, password: String!, username: String!): User
  }
`;

module.exports = {
  typeDefs,
};
