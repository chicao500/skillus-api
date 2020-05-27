import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { userType } from "./graphql/User/UserType";
import { userResolver } from "./graphql/User/UserResolver";
import { queryType } from "./graphql/Query";
import { skillType } from "./graphql/Skill/SkillType";
import { contactType } from "./graphql/Contact/ContactType";
import { skillResolver } from "./graphql/Skill/SkillResolver";

const app = express();
app.use(cors)
const apolloServer = new ApolloServer({
    typeDefs: [userType, queryType, skillType, contactType],
    resolvers: [userResolver, skillResolver],
});

const port = process.env.PORT || 4000;
apolloServer.applyMiddleware({ app });
app.get("/",(req, res) => res.send({ "API Skillus" }));

app.listen(port);
