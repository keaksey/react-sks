// @flow
import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    color: ${(props) => {
        console.log('props:: ', props.theme);
        return props.color ? props.color : 'red';
    }};
`

const Button = (props: any) => {
    return (
        <Btn className={`btn`} {...props}>
            {props.children}
        </Btn>
    )
}

export default Button

