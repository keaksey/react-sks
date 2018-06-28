// @flow
import React from 'react'
import './styles.scss'
import {
    SearchSection
} from './components'

class HomePage extends React.Component<{}>{
    
    render() {
        return (
            <div className="home-page-wrapper">
                <SearchSection />
            </div>
        )
    }
}

export default HomePage
