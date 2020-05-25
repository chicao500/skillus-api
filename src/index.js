import express from "express";
import { ApolloServer } from "apollo-server-express";
import { gql } from "apollo-server";
import db from "./config/connection";

const app = express();

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const port = process.env.PORT || 8080

const resolvers = {
  Query: {
    hello: () =>
        new Promise((resolve, reject) => {
            db.query("select * from user", (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(JSON.stringify(result));
                }
            });
        }),
    },
};


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

apolloServer.applyMiddleware({ app });

app.get("/", (req, res) => {
    res.send("Hello Agora2");
});

app.listen(port);
