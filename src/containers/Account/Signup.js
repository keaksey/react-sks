// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { Field } from 'redux-form'

import { Forms, Button } from './../../components'
import { Users } from './../../graphql'

type Props = {
    handleSubmit: PropTypes.func,
    dirty: bool,
    history: PropTypes.func
};
class Signup extends Component<Props> {
    
    handleCompleted = ({ userRegister: { errors } }) => {
        if ( !errors ) {
            this.props.history.push(`/account/login`);
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
                                <h3 className="mb-0">Signup</h3>
                            </div>
                            <div className="card-body">
                                <Mutation
                                    mutation={Users.USER_REGISTER}
                                    onCompleted={this.handleCompleted}
                                >
                                    {((userRegister, {loading, data} ) =>
                                        <Forms.ReduxForm
                                            handleSubmit={handleSubmit}
                                            onSubmit={(field) => {
                                                userRegister({variables: field});
                                            }}
                                            errors={data && data.userRegister}
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
                                                name="password1"
                                                type="password"
                                                label="Password"
                                                inputClassName="rounded-0"
                                                size="lg"
                                            />
                                            <Field
                                                component={Forms.renderField}
                                                name="password2"
                                                type="password"
                                                label="Re-Password"
                                                inputClassName="rounded-0"
                                                size="lg"
                                            />
                                            <Button type="submit"
                                                className="btn-primary btn-lg float-right"
                                                disabled={!dirty}
                                                loading={loading}
                                            >
                                                Signup
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
Signup = Forms.withForm({
    form: 'signupForm'
}, null)(Signup)

export default Signup
