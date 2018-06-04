// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

type Props = {
    children?: PropTypes.Node,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object | PropTypes.array
};
class Form extends React.PureComponent<Props>{
    
    getErrors = (param: any = {}) => {
        if ( param && param.errors ){
            return param.errors;
        }
        
        return null;
    }
    
    render() {
        const { errors, handleSubmit, onSubmit } = this.props;
        let formErrors = this.getErrors(errors);
        
        return (
            <form className="form"
                autoComplete="off"
                noValidate
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onSubmit)()
                }}
            >
                {!isEmpty(formErrors) &&
                    <div className="alert alert-danger" role="alert">
                        <ul>
                            {formErrors.map((item, i) => <li key={i}>{item.message}</li>)}
                        </ul>
                    </div>
                }
                {this.props.children}
            </form>
        )
    }
}

export default Form

