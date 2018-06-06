// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { AppProvider as  PolarisAppProvider } from '@shopify/polaris'

import Routes from './Routes'
import configureStore from './redux/store'
import client from './ApolloClient'

const store = configureStore();

class App extends Component<{}>{
    
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <PolarisAppProvider>
                        <Routes />
                    </PolarisAppProvider>
                </ApolloProvider>
            </Provider>
        );
    }
}

export default App;
