const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema.js");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3001, () => {
  console.log("Server running");
});
