const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    password: String
    email: String
    image: String
    publications: Int
    followers: Int
    followed: Int
    description: String
  }
  type Post {
    date: String
    img: String
    description: String
    id_author: Int
  }

  type Query {
    postsByUser(id: Int!): [Post]
    getUserByEmail(email: String!): User
    loginUser(email: String!, password: String!): User
  }

  type Mutations {
    createPost(
      date: String!
      img: String!
      description: String!
      id_author: Int!
    ): String
    updatePost(
      id: Int!
      date: String!
      img: String!
      description: String!
      id_author: Int!
    ): String
    registrerUser(email: String!, password: String!, username: String!): String
  }
`;

module.exports = {
  typeDefs,
};
