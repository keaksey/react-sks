// @flow
import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'

type Props = {
    className?: string,
    children?: PropTypes.Node,
    type?: string,
    to: string,
    active: string
};
const Link = (props: Props) => {
    let klassName = props.className ? props.className.split(' ') : null;
    
    klassName = classNames(
        klassName, 
        props.type === 'button' ? 'btn': ''
    );
    
    return (
        <RouterNavLink to={props.to}
            className={`${klassName}`}
            activeClassName={props.active || ''}
        >
            {props.children}
        </RouterNavLink>
    )
}

export default Link

