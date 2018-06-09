// @flow
import React from 'react'

import {
  Switch
} from 'react-router-dom'

import {
  MyLoadable 
} from './../../components'

import { 
  //AuthenticatedRoute, 
  //UnauthenticatedRoute,
  AppliedRoute
} from './../../components/Routes'

const AsyncHomePage = MyLoadable({
    loader: () => import("./containers/HomePage")
})

export default function Routes({ childProps }: any) {
    return (
        <Switch>
            <AppliedRoute
              exact path="/"
              component={AsyncHomePage}
              props={childProps}
            />
        </Switch>
    )
}