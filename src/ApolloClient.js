import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'

const httpLink = createHttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin'
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    console.log('token ', !!token);
    
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
});

export default client
