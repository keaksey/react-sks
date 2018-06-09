// @flow
import React from 'react'
import PropTypes from 'prop-types'

import {
    Page
} from '@shopify/polaris'

import {
    MenuTabs
} from './components'

import Routes from './Routes'
import './styles.css'

type Props = {
    currentUser: PropTypes.object,
    match: PropTypes.object
};
class Shop extends React.Component<Props> {
   
    render() {
        
        return (
            <section className="section-wrapper pt-5 container">
                <Page fullWidth>
                    <MenuTabs {...this.props} />
                    <div className="dashboard_content">
                        <Routes childProps={{...this.props}}/>
                    </div>
                </Page>
            </section>
        )
    }
}

export default Shop
