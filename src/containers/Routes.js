import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable'
import { LoadingPage } from './../components'

const AsyncAppLogin = Loadable({
    loader: () => import("./Account").then((component) => component.Login),
    loading: () => <LoadingPage />
})

const AsyncNotFound404 = Loadable({
    loader: () => import("./../components/404"),
    loading: () => <LoadingPage />
})

const AsyncStoreFront = Loadable({
    loader: () => import("./StoreFront"),
    loading: () => <LoadingPage />
})

export default function Routes() {
    
    return (
        <Switch>
            <Route exact path="/" component={AsyncStoreFront} />
            <Route exact path="/account/login" component={AsyncAppLogin} />
            <Route component={AsyncNotFound404} />
        </Switch>
    )
}
