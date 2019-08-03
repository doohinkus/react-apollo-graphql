import { makeExecutableSchema, 
  addMockFunctionsToSchema, 
} from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Contact {
    id: ID!
    firstName: String
    lastName: String
  }

  type Query {
    contacts: [Contact]
  }
  type Mutation {
    addContact(firstName: String!, lastName: String!): Contact
  }
`;
// Mutation is like post

export default makeExecutableSchema({typeDefs, resolvers});

