// @flow
import React, { Component } from 'react'
import { Query } from 'react-apollo'

import {
    Navbar
} from './../components'

import { Users } from './../graphql'

import Routes from './Routes'

class App extends Component<{}> {
    
    render() {
        
        return (
            <Query query={Users.CURRENT_USER_QUERY}>
                {result => {
                  let { loading, data } = result;
                  if ( loading ) return <div>Loaind.... </div>;
                  
                  const childProps = {
                    ...data
                  }
                  
                  return (
                    <React.Fragment>
                        <header className="app-header">
                            <Navbar {...childProps} />
                        </header>
                        <div className="container-fluid">
                            <Routes childProps={childProps} />
                        </div>
                    </React.Fragment>
                )}}
            </Query>
        );
    }
}


export default App

