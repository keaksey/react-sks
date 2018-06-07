// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import {
    Page,
    Layout,
    Card,
    FormLayout,
    PageActions,
    Stack
} from '@shopify/polaris'

import { Mutation } from 'react-apollo'
import { Redirect } from "react-router-dom"

import { Forms } from './../../components'
import { Shop } from './../../graphql'

type Props = {
    handleSubmit: PropTypes.func,
    currentUser: PropTypes.object
};
class ShopCreate extends React.Component<Props> {
    
    handleCompleted = () => {
        console.log('handleCompleted::: ')
    };
    
    render() {
        const { handleSubmit, currentUser } = this.props;
        const { shop } = currentUser;
        
        if ( shop.isOwner ) {
            return (
                <Redirect to={`/shop/${shop.domain}`} />
            )
        }
        
        return (
            <section className="section-wrapper pt-5">
                <Page>
                    <Mutation
                        mutation={Shop.SHOP_CREATE}
                        onCompleted={this.handleCompleted}
                    >
                        {((shopCreate, {loading, error, data} ) =>
                            <Forms.ReduxForm
                                handleSubmit={handleSubmit}
                                onSubmit={(field) => {
                                    shopCreate({variables: {input: field}});
                                }}
                                formErrors={data && data.shopCreate}
                                errors={error}
                            >
                                <Stack vertical={true}>
                                    <Stack.Item>
                                        <Layout>
                                            <Layout.AnnotatedSection
                                                title="Store"
                                                description="SKS and your customers will use this information to contact you."
                                            >
                                                <Card title="Store" sectioned>
                                                  <FormLayout>
                                                    <Field
                                                        label="Store name"
                                                        name="name"
                                                        component={Forms.renderField}
                                                        polaris
                                                    />
                                                    <Field
                                                        label="Store domain"
                                                        name="domain"
                                                        component={Forms.renderField}
                                                        polaris
                                                    />
                                                    <Field 
                                                        name="email"
                                                        label="Account email"
                                                        component={Forms.renderField}
                                                        type="email"
                                                        polaris
                                                    />
                                                  </FormLayout>
                                                </Card>
                                            </Layout.AnnotatedSection>
                                        </Layout>
                                    </Stack.Item>
                                    <Stack.Item>
                                        <PageActions
                                            primaryAction={{
                                                content: 'Save',
                                                submit: true,
                                                loading
                                            }}
                                        />
                                    </Stack.Item>
                                </Stack>
                            </Forms.ReduxForm>
                        )}
                    </Mutation>
                </Page>
            </section>
        )
    }
}

export default Forms.withForm({
    form: 'shopCreateForm'
}, null)(ShopCreate)



