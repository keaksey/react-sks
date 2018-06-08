// @flow
import React from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import Routes from './Routes'
import { Users } from './../graphql'
import AppProvider from './../components/AppProvider'
import { Navbar } from './../components'
import StoreProvider from './core/StoreProvider'

type Props = {
    history: PropTypes.object,
    match: PropTypes.object
};
class StoreFront extends React.Component<Props>{
    
    render() {
        const { history, match } = this.props;
        
        let routeProps = {
            childProps: {
                ...this.props
            }
        }
        
        return (
              <Query query={Users.CURRENT_USER_QUERY}>
                  {(result) => {
                    var { refetch, loading, data } = result;
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
                                <StoreProvider domain={match.params.domain}>
                                  {(shop) => <Routes shop={shop} {...routeProps} />}
                                </StoreProvider>
                            </div>
                          </React.Fragment>
                      </AppProvider>
                  )}}
              </Query>
        )
    }
}

export default StoreFront

