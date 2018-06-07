// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import {
    Banner
} from '@shopify/polaris'

type Props = {
    children?: PropTypes.Node,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object | PropTypes.array,
    formErrors: PropTypes.object | PropTypes.array
};
class Form extends React.PureComponent<Props>{
    
    getErrors = (param: any = {}) => {
        if ( param && param.errors ){
            return param.errors;
        }
        
        return null;
    }
    
    render() {
        let { formErrors, errors, handleSubmit, onSubmit } = this.props;
        formErrors = this.getErrors(formErrors);
        
        return (
            <form className="form"
                autoComplete="off"
                noValidate
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onSubmit)()
                }}
            >
                {isEmpty(formErrors) && errors && 
                    <div className="mb-4">
                        <Banner status="critical"
                            title="High risk of fraud detected"
                        >
                        </Banner>
                    </div>
                }
                {!isEmpty(formErrors) &&
                    <div className="mb-4">
                        <Banner status="critical">
                            <ul>
                                {formErrors.map((item, i) => 
                                    <li key={i}>
                                        {item.field} {item.message || (item.messages && item.messages[0])}
                                    </li>
                                )}
                            </ul>
                        </Banner>
                    </div>
                }
                {this.props.children}
            </form>
        )
    }
}

export default Form

