import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import mySchema from './src/schema';
import cors from 'cors';
import { Server } from 'net';

const PORT = 4000;
const origin = "http://localhost:3000";

const app = express();

app.use('*', cors({ origin }))
// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: mySchema }));
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.listen(PORT, () => console.log(`App running on ${PORT}`));