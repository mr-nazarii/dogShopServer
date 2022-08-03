import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";
import dotenv from "dotenv";

const port = process.env.PORT || 4000;

const app = express();

const schema = buildSchema(`
    type Query {
        hello: string
    }
`);

app.listen(port, () =>
  console.log("Server started successfully on port " + port)
);
