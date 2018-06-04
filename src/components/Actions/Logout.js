// @flow
import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import { AUTH_TOKEN } from './../../constants'
import {withAppProvider} from './../AppProvider'

type Props = {
    className?: string,
    children?: PropTypes.Node,
    type?: string,
    history: PropTypes.object.isRequired,
    gqlClient: PropTypes.object
};

class Logout extends React.PureComponent<Props> {
    
    handleLogout = () => {
        localStorage.removeItem(AUTH_TOKEN);
        this.props.gqlClient.client.resetStore();
        this.props.history.push('/');
    }
    
    render() {
        
        return (
            <Button 
                type={this.props.type||''}
                className={this.props.className}
                onClick={this.handleLogout}
            >
                {this.props.children || 'Log Out'}
            </Button>
        )
    }
}

export default withAppProvider()(Logout)


