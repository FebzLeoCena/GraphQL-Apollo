import { ApolloServer } from "@apollo/server";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";

// import dotenv from "dotenv";
// import { graphqlHTTP } from "express-graphql";
// import { schema } from "./models/Recipe.js";

const MONGO_DB =
  "mongodb+srv://febinky07:febinky5*@graph-cluster.hgixg3g.mongodb.net/Graph-Cluster?retryWrites=true&w=majority";

//typeDefs - GraphQL type Definition
//resolvers -  how do we resolve queries/mutations
const server = new ApolloServer({ typeDefs, resolvers });
// Passing an ApolloServer instance to the `startStandaloneServer` function:

//  1. creates an Express app

//  2. installs your ApolloServer instance as middleware

//  3. prepares your app to handle incoming requests

// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });
mongoose
  .connect(MONGO_DB)
  .then(async () => {
    console.log("Connected to MongoDB");
    // return server.listen({ port: 3003 });
    const { url } = await startStandaloneServer(server, {
      listen: { port: 3003 },
    });
    console.log(`🚀  Server ready at: ${url}`);
  })
  .catch((er) => {
    console.log(`Could not connect to MongoDB:${er}`);
  });

// console.log(`🚀  Server ready at: ${url}`);

// const app = express();
// dotenv.config();

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on Port:${process.env.PORT}`);
// });
