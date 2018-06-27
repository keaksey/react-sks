// @flow
import React from 'react'
import Loadable from 'react-loadable'

import * as Forms from './Forms'
export * from './Https'
export * from './Header'
export * from './Actions'
export { LoadingPage } from './Loadings'
export * from './AppProvider'
export {default as Footer } from './Footer'

const MyLoadable = ({loader, loading}: any) => {
    return Loadable({
      loader: loader,
      loading: loading ? loading : () => <div />
  })
}

export {
    Forms,
    MyLoadable
}
