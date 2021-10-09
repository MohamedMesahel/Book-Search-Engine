
// import { ApolloServer } from 'apollo-server-express';
// import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
// import express from 'express';
// import http from 'http';
// const path = require('path');
// const { typeDefs, resolvers } = require('./schemas');

// async function startApolloServer(typeDefs, resolvers) {
//   const app = express();
//   const httpServer = http.createServer(app);
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//   });
//   await server.start();
//   server.applyMiddleware({ app });
//   await new Promise(resolve => httpServer.listen({ port: 3001 }, resolve));
//   console.log(` Server ready at http://localhost:4000${server.graphqlPath}`);
// }
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,

});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

