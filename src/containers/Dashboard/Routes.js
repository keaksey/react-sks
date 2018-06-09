// @flow
import React from 'react'

import {
  Switch
} from 'react-router-dom'

import { 
  AuthenticatedRoute, 
  //UnauthenticatedRoute, 
  PermissionRoute
} from './../../components/Routes'

import {
  //NotFound404, 
  MyLoadable 
} from './../../components'

import {
  showOwnerPermission
} from './Permission'

const AsyncShopGeneral = MyLoadable({
    loader: () => import('./containers/Home')
})

const AsyncYourAccount = MyLoadable({
    loader: () => import("./../Account")
})

const AsyncProducts = MyLoadable({
    loader: () => import("./containers/Products")
})

const AsyncProductForm = MyLoadable({
    loader: () => import("./containers/Products/Forms")
})

export default function Routes({ childProps }: any) {
    const { match } = childProps;
    
    return (
        <Switch>
            <PermissionRoute 
              exact path={`${match.path}/shop`}
              component={AsyncShopGeneral}
              props={childProps}
              permission={showOwnerPermission}
            />
            <PermissionRoute 
              exact path={`${match.path}/products/:action`}
              component={AsyncProductForm}
              props={childProps}
              permission={showOwnerPermission}
            />
            <AuthenticatedRoute 
              exact path={`${match.path}/products`}
              component={AsyncProducts}
              props={childProps}
              permission={showOwnerPermission}
            />
            <AuthenticatedRoute 
              exact path="/your/account"
              component={AsyncYourAccount}
              props={childProps}
            />
        </Switch>
    )
}