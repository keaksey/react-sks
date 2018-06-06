// @flow
import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable'
import { LoadingPage, NotFound404 } from './../components'
import { 
  AuthenticatedRoute, 
  UnauthenticatedRoute, 
  AppliedRoute 
} from './../components/Routes'

const MyLoadable = ({loader, loading}: any) => {
    return Loadable({
      loader: loader,
      loading: loading ? loading : () => <LoadingPage />
  })
}

const AsyncAppLogin = MyLoadable({
    loader: () => import("./Account").then((c) => c.Login),
})

const AsyncAppSignup = MyLoadable({
    loader: () => import("./Account").then((c) => c.Signup),
})

const AsyncStoreFront = MyLoadable({
    loader: () => import("./StoreFront")
})

const AsyncYourAccount = MyLoadable({
    loader: () => import("./Account")
})

const AsyncShopCreate = MyLoadable({
    loader: () => import("./Shop/ShopCreate")
})

export default function Routes({ childProps }: any) {
  
    return (
        <Switch>
            <AppliedRoute 
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
            <Route component={NotFound404} />
        </Switch>
    )
}
