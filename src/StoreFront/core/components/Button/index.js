// @flow
import React from 'react'

const Button = (props: any) => {
    return (
        <button className={`btn`} {...props}>
            {props.children}
        </button>
    )
}

export default Button

