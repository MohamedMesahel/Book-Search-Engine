const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type  BOOK {
    authors: [String]
    description: String
    Id: String!
    image: String
    link: String
    title: String!
  }
  type User {
    _id: ID
    username: String!
    email: String!
    Count: Int
    saveds: []
  }

  type Auth {
    token: ID!
    user: User
  }

  input SavedInput {
    authors: [String]
    title: String
    description: String
    Id: String
    image: String
    link: String
  }
  
  type Query {
    me: User
    users: User
  }

  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    save(input: SavedInput): User
    remove(Id: String): User
  }
`;

module.exports = typeDefs;
