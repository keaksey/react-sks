// @flow
import React from 'react'
import Loadable from 'react-loadable'
import { LoadingPage } from './../Loadings'

export function MyLoadable({loader, loading}: any) {
    return Loadable({
      loader: loader,
      loading: loading ? loading : () => <LoadingPage />
  })
}

