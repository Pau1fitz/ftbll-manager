import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjc8umwde0ix80117vsyqwnn8'}),
  cache: new InMemoryCache()
});

const FootballApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent('ftbllmgr', () => FootballApp);
