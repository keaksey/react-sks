// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { gqlStore } from './index'

type Props = {
  children: PropTypes.Node,
  domain: String
};
class StoreProvider extends React.Component<Props>{
    
    render() {
        const { domain } = this.props;
        
        return (
            <Query query={gqlStore.SHOP_QUERY} variables={{domain}}>
                {(result) => {
                    let {loading, data, error } = result;
                    if ( loading ) return <div>Loaind.... </div>;
                    if ( error ) return <div>Not found!</div>
                    
                    return this.props.children({
                        ...data.shop
                    })
                }}
            </Query>
        )
    }
}

export default StoreProvider