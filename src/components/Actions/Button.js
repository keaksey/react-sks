// @flow
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

type Props = {
    className?: string,
    disabled?: bool,
    loading?: bool,
    children?: PropTypes.Node,
    type?: string,
    onClick?: PropTypes.func,
    plain?: bool
};
const Button = (props: Props) => {
    let klassName = props.className ? props.className.split(' ') : '';
    
    klassName = classNames(
        klassName,
        props.disabled && 'disabled',
        props.loading && 'loading',
        props.plain && 'btn-plain'
    );
    
    return (
        <button 
            onClick={props.onClick}
            className={`btn ${klassName}`} type={props.type || 'button'}
        >
            {props.children}
        </button>
    )
}

export default Button