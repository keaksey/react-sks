// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { Field } from 'redux-form'

import { AUTH_TOKEN } from './../../constants'
import { Forms, Button } from './../../components'
import { replaceRoute } from './../../components/Routes'

import { Users } from './../../graphql'

type Props = {
    tokenCreate: PropTypes.func,
    handleSubmit: PropTypes.func,
    submitting: bool,
    dirty: bool,
    startSubmit: PropTypes.func,
    stopSubmit: PropTypes.func,
    formErrors: any,
    history: PropTypes.object,
    location: PropTypes.object,
    gqlRefetch: PropTypes.func
};

class Login extends Component<Props> {
    
    handleCompleted = ({ tokenCreate: { token, errors } }) => {
        if ( token && !errors ) {
            localStorage.setItem(AUTH_TOKEN, token);
            this.props.gqlRefetch();
            replaceRoute(this.props, '/')
        }
    }
    
    render() {
        const { 
            handleSubmit,
            dirty
        } = this.props;
        
        return (
            <section className="section-wrapper container py-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card rounded-0">
                            <div className="card-header">
                                <h3 className="mb-0">Login</h3>
                            </div>
                            <div className="card-body">
                                <Mutation
                                    mutation={Users.LOGIN_MUTATION}
                                    onCompleted={this.handleCompleted}
                                >
                                    {((tokenCreate, {loading, data} ) =>
                                        <Forms.ReduxForm
                                            handleSubmit={handleSubmit}
                                            onSubmit={(field) => {
                                                tokenCreate({variables: field});
                                            }}
                                            errors={data && data.tokenCreate}
                                        >
                                            <Field 
                                                component={Forms.renderField}
                                                name="username"
                                                type="text"
                                                label="Username"
                                                inputClassName="rounded-0"
                                                size="lg"
                                            />
                                            <Field 
                                                component={Forms.renderField}
                                                name="password"
                                                type="password"
                                                label="Password"
                                                inputClassName="rounded-0"
                                                size="lg"
                                            />
                                            <Button 
                                                type="submit" 
                                                className="btn-primary btn-lg float-right"
                                                disabled={!dirty}
                                                loading={loading}
                                            >
                                                Login
                                            </Button>
                                        </Forms.ReduxForm>
                                    )}
                                </Mutation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

// eslint-disable-next-line
Login = Forms.withForm({
    form: 'LoginForm'
}, null)(Login)

export default Login

// compose(
//     graphql(Users.LOGIN_MUTATION, { name: 'tokenCreate' })
// )(Login)

