import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

const app = express();

mongoose.connect('mongodb+srv://JamalSaeed:<jjaammaall>@cluster0.p2kpsa3.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});
