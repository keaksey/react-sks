// @flow
import React from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import Routes from './Routes'
import { Users } from './../graphql'
import AppProvider from './../components/AppProvider'
import { Navbar } from './../components'

type Props = {
    history: PropTypes.object
};
class StoreFront extends React.Component<Props>{
    
    render() {
        const { history } = this.props;
        
        let routeProps = {
            childProps: {
                ...this.props
            },
            theme: {
                name: 'SreyKeo',
                path: './Themes/SreyKeo'
            }
        }
        
        return (
            <AppProvider>
                <Query query={Users.CURRENT_USER_QUERY}>
                    {(result) => {
                      let { refetch, loading, data } = result;
                      if ( loading ) return <div>Loaind.... </div>;
                      
                      const childProps = {
                          ...data,
                          gqlRefetch: refetch,
                          history
                      }
                      
                      routeProps.childProps = {
                        ...routeProps.childProps,
                        ...childProps
                      }
                      
                      return (
                        <AppProvider gqlClient={result}>
                            <React.Fragment>
                              <Navbar {...childProps} />
                              <div className="container-fluid">
                                  <Routes {...routeProps} />
                              </div>
                            </React.Fragment>
                        </AppProvider>
                    )}}
                </Query>
            </AppProvider>
        )
    }
}

export default StoreFront

