import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export { default as withForm} from './withForm'
export { default as ReduxForm } from './Form'

const propsTypes = {
    input: PropTypes.object
}
export const renderField = (props: propsTypes) =>{
    let { 
        input,
        type,
        label,
        placeholder, 
        size, 
        // prefix, 
        // helpText, 
        // labelAction,
        // min,
        // options,
        // connectedRight,
        // readOnly,
        //meta: { touched, error },
        inputClassName
    } = props;
    inputClassName = inputClassName ? inputClassName.split(' ') : '';
    
    inputClassName = classNames(
        'form-control',
        inputClassName,
        size && `form-control-${size}`
    );
    
    const inputId = `id-${input.name}`;
    
    return (
        <div className={`${'form-group '} ${type !== 'hidden' ? '': 'd-none'}`}>
            {label && <label htmlFor={inputId}>{label}</label>}
            <input {...input} 
                id={inputId}
                placeholder={placeholder} 
                className={inputClassName} 
                type={type} 
            />
        </div>
    )
}

