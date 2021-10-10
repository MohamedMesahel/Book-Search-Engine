const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type  BOOK {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [BOOK]

  }

  type Auth {
    token: ID!
    user: User
  }

  input SavedInput {
    authors: [String]
    title: String
    description: String
    bookId: String
    image: String
    link: String
  }
  
  type Query {
    me: User
  }

  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
