// @flow
import React from 'react'
import Routes from './Routes'

class FrontPage extends React.Component<{}>{
    
    render() {
        
        return (
            <div>
                <Routes childProps={{...this.props}}/>
            </div>
        )
    }
}

export default FrontPage

