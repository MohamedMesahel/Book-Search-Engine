const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// TODO: Make sure to connect MongoDB to Heroku instead
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookDB",
//   { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true });
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL 🌍 at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

//Root:Zizo1234@cluster0.tjgsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// import { ApolloServer } from 'apollo-server-express';
// import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
// import express from 'express';
// import http from 'http';
// import { typeDefs, resolvers } from './index';


// // const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');

// const { ApolloServer } = require('apollo-server-express');
// const { authMiddleware } = require('./utils/auth');
// const db = require('./config/connection');
// const PORT = process.env.PORT || 3001;
// const app = express();


// async function startApolloServer() {
//   const app = express();
//   const httpServer = http.createServer(app);
//   const PORT = process.env.PORT || 3001;
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//   });
//   await server.start();
//   server.applyMiddleware({ app });
//   await new Promise(resolve => httpServer.listen(PORT, resolve));
//   console.log(`API server running on port ${PORT}!`);
//   console.log(`Use GraphQL  at http://localhost:${PORT}${server.graphqlPath}`);
// }

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,