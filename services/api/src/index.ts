import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const users = [];
const coachs = [];
const profilePhotos = [];
const skills = [];
const classes = [];

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL Strings (such as this one) start with the hash (#) symbol.
  type User {
    firstName: String
    lastName: String
    email: String
  }

  type Coach {
    firstName: String
    lastName: String
    skills: [Skill]
    classes: [Class]
    photo: ProfilePhoto
  }

  type ProfilePhoto {
    path: String
    b64: String
  }

  type Skill {
    name: String
  }

  type Class {
    name: String
    skills: [Skill]
  }

  type Query {
    users: [User],
    coachs: [Coach],
    profilePhotos: [ProfilePhoto],
    skills: [Skill],
    classes: [Class],
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    coachs: () => coachs,
    profilePhotos: () => profilePhotos,
    skills: () => skills,
    classes: () => classes,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
