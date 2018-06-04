// @flow
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classNames from 'classnames'

type Props = {
    className?: string,
    children?: React.Node,
    type?: string,
    to: string
};
const Link = (props: Props) => {
    let klassName = props.className ? props.className.split(' ') : null;
    
    klassName = classNames(
        klassName, 
        props.type === 'button' ? 'btn': ''
    );
    
    return (
        <RouterLink to={props.to} 
            className={`${klassName}`}
        >
            {props.children}
        </RouterLink>
    )
}

export default Link

