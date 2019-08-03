import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Contacts from './Contacts';
import './App.css';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Apollo Graph QL Project</h1>
        <Contacts />
      </div>
    </ApolloProvider>
  )
};

export default App;
