// @flow
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import {
    Navbar
} from './../components'

import AppProvider from './../components/AppProvider'

import { Users } from './../graphql'
import Routes from './Routes'

type Props = {
    history: PropTypes.object
};
class App extends Component<Props> {
    
    render() {
        const { history } = this.props;
        
        return (
            <Query query={Users.CURRENT_USER_QUERY}>
                {(result) => {
                  let { refetch, loading, data } = result;
                  if ( loading ) return <div>Loaind.... </div>;
                  
                  const childProps = {
                      ...data,
                      gqlRefetch: refetch,
                      history
                  }
                  
                  return (
                    <AppProvider gqlClient={result}>
                        <React.Fragment>
                          <Navbar {...childProps} />
                          <Routes childProps={childProps} />
                        </React.Fragment>
                    </AppProvider>
                )}}
            </Query>
        );
    }
}


export default App

