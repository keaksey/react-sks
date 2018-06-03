import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { NotFound404 } from './components'
import AppMainPage from "./containers"

export default function Routes() {
    
    return (
        <Router>
            <Switch>
                <Route path="/" component={AppMainPage}/>
                <Route component={NotFound404} />
            </Switch>
        </Router>
    )
}
