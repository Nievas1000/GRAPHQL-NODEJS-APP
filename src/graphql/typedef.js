const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload

  type Coment {
    id: Int
    id_post: Int
    coment: String
    date: String
  }

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
    getComentsByPost(id: Int): [Coment!]!
  }

  type Mutation {
    registrerUser(email: String!, password: String!, username: String!): User
    updateInfoProfile(id: Int!, description: String!, username: String!): String
  }
`;

module.exports = {
  typeDefs,
};
