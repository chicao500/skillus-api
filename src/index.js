import express from "express";
import { ApolloServer } from "apollo-server-express";
import { gql } from "apollo-server";
import { userType } from "./graphql/User/UserType";
import { userResolver } from "./graphql/User/UserResolver";
import db from "./config/connection";
import {queryType} from "./graphql/Query";
import { skillType } from "./graphql/Skill/SkillType";
import { skillResolver } from "./graphql/Skill/SkillResolver";

const app = express();

const apolloServer = new ApolloServer({
    typeDefs: [userType, queryType, skillType],
    resolvers: [userResolver, skillResolver],
  });
  
  apolloServer.applyMiddleware({ app, cors: false });
  

app.listen(8080);
