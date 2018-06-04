// @flow
import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable'
import { LoadingPage, NotFound404 } from './../components'
import { AuthenticatedRoute, UnauthenticatedRoute } from './../components/Routes'

const MyLoadable = ({loader, loading}: any) => {
    return Loadable({
      loader: loader,
      loading: loading ? loading : () => <LoadingPage />
  })
}

const AsyncAppLogin = MyLoadable({
    loader: () => import("./Account").then((c) => c.Login),
})

const AsyncStoreFront = MyLoadable({
    loader: () => import("./StoreFront")
})

const AsyncYourAccount = MyLoadable({
    loader: () => import("./Account")
})

export default function Routes({ childProps }: any) {
  
    return (
        <Switch>
            <UnauthenticatedRoute 
              exact path="/" 
              component={AsyncStoreFront}
              props={childProps}
            />
            <AuthenticatedRoute 
              exact path="/your/account"
              component={AsyncYourAccount}
              props={childProps}
            />
            <UnauthenticatedRoute 
              exact path="/account/login" 
              component={AsyncAppLogin}
              props={childProps}
            />
            <Route component={NotFound404} />
        </Switch>
    )
}
