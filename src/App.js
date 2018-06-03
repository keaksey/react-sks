// @flow
import React, { Component } from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

import { Provider } from 'react-redux'

import Routes from './Routes'
import configureStore from './redux/store'
import { AUTH_TOKEN } from './constants'

const httpLink = createHttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin'
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    
    return {
        headers: {
          ...headers,
          authorization: token ? `JWT ${token}` : "",
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

const store = configureStore();

class App extends Component<{}>{
    
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <Routes />
                </ApolloProvider>
            </Provider>
        );
    }
}

export default App;
