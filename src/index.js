const express = require("express");
const cors = require("cors");
const { resolvers } = require("./graphql/resolvers.js");
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphql/typedef");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const start = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  apolloServer.listen(3001, () => {
    console.log("Server running");
  });
};

start();
