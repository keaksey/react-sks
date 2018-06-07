// @flow
import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable'

import {
    ShopRoute,
    ProductRoute,
    CollectionRoute
} from './core/Router'

const MyLoadable = ({loader, loading}: any) => {
    return Loadable({
      loader: loader,
      loading: loading ? loading : () => <div>Loading</div>
  })
}

const NotFound404 = () => {
    return (
        <div>NotFound404</div>
    )
}

const myImport = async (path, name) =>{
    const theme = await import(`${path}`);
    return theme[name]
}

export default function Routes({ childProps, theme }: any) {
    const { match } = childProps;
    
    const themeRoot = MyLoadable({
        loader: () => myImport(theme.path, 'ThemeRoot')
    })
    
    const themeProduct = MyLoadable({
        loader: () => myImport(theme.path, 'Product')
    })
    
    return (
        <Switch>
            <ShopRoute 
                exact path={match.path} 
                component={themeRoot}
                props={childProps}
            />
            <ProductRoute 
                exact path={`${match.path}/products/:handle`}
                component={themeProduct}
                props={childProps}
            />
            <CollectionRoute 
                exact path={`${match.path}/collections/:handle`}
                component={themeProduct}
                props={childProps}
            />
            <Route component={NotFound404} />
        </Switch>
    )
}