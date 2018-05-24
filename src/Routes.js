import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable'
import { LoadingPage } from './components'

const AsyncAppMainPage = Loadable({
    loader: () => import("./containers"),
    loading: () => <LoadingPage />
})

const AsyncNotFound404 = Loadable({
    loader: () => import("./components/404"),
    loading: () => <LoadingPage />
})

export default function Routes() {
    
    return (
        <Router>
            <Switch>
                <Route path="/" component={AsyncAppMainPage}/>
                <Route component={AsyncNotFound404} />
            </Switch>
        </Router>
    )
}
