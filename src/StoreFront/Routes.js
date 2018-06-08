// @flow
import React from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable'
import { ThemeProvider } from 'styled-components'

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

type Props = {
    childProps: PropTypes.object,
    shop: PropTypes.object
};
export default class Routes extends React.PureComponent<Props, any> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            themeStyle: {},
            styleLoading: true
        };
    }
    
    loadThemeStyle = (themePath: string) => {
        
        myImport(themePath, 'Themes').then((themeStyle) =>{
            this.setState({themeStyle, styleLoading: false});
        })
    };
    
    componentDidMount() {
        let { shop } = this.props;
        const themePath = `./Themes${shop.currentTheme.src}`
        
        this.loadThemeStyle(themePath);
    }
    
    render() {
        let { childProps, shop } = this.props;
        
        const { match } = childProps;
        childProps  = {...childProps, shop};
        
        const theme = shop.currentTheme;
        const themePath = `./Themes${theme.src}`
        
        const themeRoot = MyLoadable({
            loader: () => myImport(themePath, 'ThemeRoot')
        })
        
        const themeProduct = MyLoadable({
            loader: () => myImport(themePath, 'Product')
        })
        
        if ( this.state.styleLoading ){
            return <div>Shop loading...</div>
        }
        
        return (
            <ThemeProvider theme={this.state.themeStyle}>
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
            </ThemeProvider>
        )
    }
}