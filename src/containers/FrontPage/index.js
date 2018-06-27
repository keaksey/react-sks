// @flow
import React from 'react'
import Routes from './Routes'
import { Footer } from './../../components'

import './styles.scss'

class FrontPage extends React.Component<{}>{
    
    render() {
        
        return (
            <>
                <div className="container-fluid main" role="main">
                    <Routes childProps={{...this.props}}/>
                </div>
                <Footer />
            </>
        )
    }
}

export default FrontPage

