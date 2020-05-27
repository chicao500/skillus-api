import express from "express";
import { ApolloServer } from "apollo-server-express";
import { userType } from "./graphql/User/UserType";
import { userResolver } from "./graphql/User/UserResolver";
import { queryType } from "./graphql/Query";
import { skillType } from "./graphql/Skill/SkillType";
import { contactType } from "./graphql/Contact/ContactType";
import { skillResolver } from "./graphql/Skill/SkillResolver";

const app = express();

const apolloServer = new ApolloServer({
    typeDefs: [userType, queryType, skillType, contactType],
    resolvers: [userResolver, skillResolver],
});

apolloServer.applyMiddleware({ app });
app.get("/", (req, res) => res.send({ message: "API Skillus" }));

app.listen(8080);
