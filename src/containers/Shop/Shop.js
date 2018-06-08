// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from './../../components'

type Props = {
    currentUser: PropTypes.object
};
class Shop extends React.Component<Props> {
   
    render() {
        const { currentUser } = this.props;
        const { shop } = currentUser;
        
        return (
            <section className="section-wrapper pt-5">
                Hello world 
                <Link to={`/shop/${shop.domain}`}>
                    go to {shop.domain}
                </Link>
            </section>
        )
    }
}

export default Shop


