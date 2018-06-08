// @flow

import React from "react"
import PropTypes from 'prop-types'
import { Route } from "react-router-dom"

export function AppliedRoute({ component: C, props: cProps, ...rest }: any) {
    
    //const { currentTheme } = cProps.shop;
    
    return (
        <Route {...rest} render={props => {
            return <C {...props} {...cProps} />
        }} />
    );
}

type Props = {
    component: PropTypes.Node,
    props: PropTypes.object
};
export class ShopRoute extends React.Component<Props> {
    
    render() {
        return (<AppliedRoute {...this.props} />);
    }
}

export class ProductRoute extends React.Component<Props> {
    
    render() {
        return (<AppliedRoute {...this.props} />);
    }
}

export class CollectionRoute extends React.Component<Props> {
    
    render() {
        return (<AppliedRoute {...this.props} />);
    }
}
