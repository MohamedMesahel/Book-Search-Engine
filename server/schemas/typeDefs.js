const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
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
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  input savedBookIds {
    authors: [String]
    title: String
    description: String
    bookId: String
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
    saveBook(input: savedBookIds): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
