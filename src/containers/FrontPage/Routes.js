// @flow
import React from 'react'

import {
  Switch
} from 'react-router-dom'

import HomePage from './containers/HomePage'

import { 
  //AuthenticatedRoute, 
  //UnauthenticatedRoute,
  AppliedRoute
} from './../../components/Routes'

export default function Routes({ childProps }: any) {
    return (
        <Switch>
            <AppliedRoute
              exact path="/"
              component={HomePage}
              props={childProps}
            />
        </Switch>
    )
}