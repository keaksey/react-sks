// @flow
import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import { NotFound404, MyLoadable } from './../components'
import { 
  AuthenticatedRoute, 
  UnauthenticatedRoute, 
  AppliedRoute
} from './../components/Routes'

const AsyncAppLogin = MyLoadable({
    loader: () => import("./Account").then((c) => c.Login),
})

const AsyncAppSignup = MyLoadable({
    loader: () => import("./Account").then((c) => c.Signup),
})

const AsyncStoreFront = MyLoadable({
    loader: () => import("./StoreFront")
})

const AsyncShopCreate = MyLoadable({
    loader: () => import("./Dashboard/ShopCreate")
})

const AsyncDashboard = MyLoadable({
    loader: () => import("./Dashboard")
})

export default function Routes({ childProps }: any) {
  
    return (
        <Switch>
            <AppliedRoute 
              exact path="/" 
              component={AsyncStoreFront}
              props={childProps}
            />
            <UnauthenticatedRoute 
              exact path="/account/login" 
              component={AsyncAppLogin}
              props={childProps}
            />
            <UnauthenticatedRoute 
              exact path="/account/signup"
              component={AsyncAppSignup}
              props={childProps}
            />
            <AuthenticatedRoute 
              exact path="/your/shop/create"
              component={AsyncShopCreate}
              props={childProps}
            />
            <AuthenticatedRoute 
              path="/your"
              component={AsyncDashboard}
              props={childProps}
            />
            <Route component={NotFound404} />
        </Switch>
    )
}
