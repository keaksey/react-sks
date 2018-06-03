// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { Field } from 'redux-form'
import { isEmpty } from 'lodash'

import { AUTH_TOKEN } from './../../constants'
import { Forms, Button } from './../../components'
import { Users } from './../../graphql'

type Props = {
    tokenCreate: PropTypes.func,
    handleSubmit: PropTypes.func,
    submitting: bool,
    dirty: bool,
    startSubmit: PropTypes.func,
    stopSubmit: PropTypes.func,
    formErrors: any,
    history: PropTypes.object
};

class Login extends Component<Props> {
    
    handleSubmit = (field: any) => {
        this.props.startSubmit();
        this.props.tokenCreate({
            variables: {...field}
        }).then(({ data }) => {
            const { errors, token } = data.tokenCreate;
            
            if ( !errors ) {
                localStorage.setItem(AUTH_TOKEN, token);
                
                this.props.history.replace({pathname: `/`});
                return false;
            }
            
            this.props.stopSubmit(errors);
        });
    }
    
    render() {
        const { 
            handleSubmit,
            submitting,
            dirty,
            formErrors
        } = this.props;
        
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center text-white mb-4">SKS 4 Login Form</h2>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card rounded-0">
                                    <div className="card-header">
                                        <h3 className="mb-0">Login</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className="form" autoComplete="off"
                                            noValidate onSubmit={handleSubmit(this.handleSubmit)}
                                        >
                                            {!isEmpty(formErrors) &&
                                                <div className="alert alert-danger" role="alert">
                                                    <ul>
                                                        {formErrors.errors.map((item, i) => <li key={i}>{item.message}</li>)}
                                                    </ul>
                                                </div>
                                            }
                                            <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <Field 
                                                    component={Forms.renderField}
                                                    name="username"
                                                    type="text"
                                                    className="form-control form-control-lg rounded-0"
                                                />
                                                <div className="invalid-feedback">Oops, you missed this one.</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <Field 
                                                    component={Forms.renderField}
                                                    name="password"
                                                    type="password"
                                                    className="form-control form-control-lg rounded-0"
                                                />
                                                <div className="invalid-feedback">Enter your password too!</div>
                                            </div>
                                            <Button 
                                                type="submit" 
                                                className="btn-primary btn-lg float-right"
                                                disabled={!dirty}
                                                loading={submitting}
                                            >
                                                Login
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// eslint-disable-next-line
Login = Forms.withForm({
    form: 'LoginForm',
})(Login)

export default compose(
    graphql(Users.LOGIN_MUTATION, { name: 'tokenCreate' })
)(Login)

