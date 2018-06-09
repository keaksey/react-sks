// @flow
import React from 'react'
import {
    Card,
    Page,
    TextField,
    FormLayout,
    Select,
    PageActions,
    Checkbox,
    DisplayText
} from '@shopify/polaris'

import { CardDropZone } from './../../components'

class Form extends React.Component<{}>{
    
    render() {
        
        return (
            <Page
                title="Add product"
                breadcrumbs={[{content: 'Products', url: '/your/products'}]}
                primaryAction={{
                    content: 'Save product'
                }}
                fullWidth
            >
                <Card>
                    <Card.Section>
                        <div className="row">
                            <div className="col-8">
                                <FormLayout>
                                    <TextField label="Title" />
                                    <TextField multiline={true} label="Description" />
                                </FormLayout>
                            </div>
                            <div className="col-4">
                                <div>
                                    <DisplayText size="small">Visibility</DisplayText>
                                    <FormLayout>
                                        <Checkbox
                                            checked={true}
                                            label="PUBLISHED"
                                          />
                                    </FormLayout>
                                </div>
                                <div className="mt-2">
                                    <DisplayText size="small" element="h3">Organization</DisplayText>
                                    <TextField label="Product type" />
                                    <TextField label="Product type" />
                                </div>
                            </div>
                        </div>
                    </Card.Section>
                </Card>
                <Card title="Images" actions={[{content: 'Upload Image'}]}>
                    <Card.Section>
                        <CardDropZone />
                    </Card.Section>
                </Card>
                <Card title="Price">
                    <Card.Section>
                        <FormLayout>
                            <FormLayout.Group>
                                <TextField label="Price" prefix="$" />
                                <TextField label="Compare at price" prefix="$" />
                            </FormLayout.Group>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <FormLayout.Group>
                                <TextField label="SKU (Stock Keeping Unit)" />
                                <TextField label="Barcode (ISBN, UPC, GTIN, etc.)" />
                            </FormLayout.Group>
                        </FormLayout>
                        <div className="mt-5 w-50">
                            <FormLayout>
                                <Select
                                    label="Inventory policy"
                                    options={[{
                                        label: "Don't track inventory",
                                        value: ''
                                    },{
                                        label: "Shopify tracks this product's inventory",
                                        value: 'bns'
                                    }]}
                                />
                            </FormLayout>
                        </div>
                    </Card.Section>
                </Card>
                <div className="mt-5">
                    <PageActions
                      primaryAction={{
                        content: 'Save product',
                      }}
                    />
                </div>
                {/*<Card title="Variants" actions={[{content: 'Add variant'}]}>
                    <Card.Section>
                        <TextField label="Store name" />
                        <TextField multiline={true} label="Store name" />
                    </Card.Section>
                </Card>*/}
            </Page>
        )
    }
}

export default Form