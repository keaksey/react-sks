// @flow
import React from 'react'
import PropTypes from 'prop-types'

// import {
//     Page
// } from '@shopify/polaris'

import {
    SideBar,
    HNavBar
} from './components'

import Routes from './Routes'
import './styles.scss'

type Props = {
    currentUser: PropTypes.object,
    match: PropTypes.object
};
class Shop extends React.Component<Props> {
   
    render() {
        
        return (
            <>
                <HNavBar />
                <section className="section-wrapper container">
                    <div className="row">
                        {/*<div className="col-3">
                            <SideBar {...this.props} />
                        </div>
                        <div className="col-9 dashboard_content">
                            <Routes childProps={{...this.props}}/>
                        </div>*/}
                        <div className="col">
                            <Routes childProps={{...this.props}}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Shop
