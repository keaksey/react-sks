// @flow
import React from 'react'
import classNames from 'classnames'

type Props = {
    className?: string,
    disabled?: bool,
    loading?: bool,
    children?: React.Node,
    type?: string
};
const Button = (props: Props) => {
    let klassName = props.className ? props.className.split(' ') : null;
    
    klassName = classNames(
        klassName,
        props.disabled && 'disabled',
        props.loading && 'loading'
    );
    
    return (
        <button className={`btn ${klassName}`} type={props.type || ''}>
            {props.children}
        </button>
    )
}

export default Button