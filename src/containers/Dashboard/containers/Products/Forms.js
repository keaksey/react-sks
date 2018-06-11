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
    DisplayText,
    Stack
} from '@shopify/polaris'

import { CardDropZone } from './../../components'
import { Forms } from './../../../../components'

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
                        <Stack vertical>
                            <Stack.Item>
                                <FormLayout>
                                    <TextField label="Title" />
                                    <Forms.TextareaEditor />
                                </FormLayout>
                            </Stack.Item>
                            <Stack.Item>
                                <FormLayout>
                                    <FormLayout.Group>
                                        <TextField label="Product type" />
                                        <TextField label="Product type" />
                                    </FormLayout.Group>
                                </FormLayout>
                            </Stack.Item>
                        </Stack>
                    </Card.Section>
                </Card>
                <CardDropZone />
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
                        <Stack vertical>
                            <Stack.Item>
                                <FormLayout>
                                    <FormLayout.Group>
                                        <TextField label="SKU (Stock Keeping Unit)" />
                                        <TextField label="Barcode (ISBN, UPC, GTIN, etc.)" />
                                    </FormLayout.Group>
                                </FormLayout>
                            </Stack.Item>
                            <Stack.Item>
                                <FormLayout>
                                    <FormLayout.Group>
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
                                        <div>
                                            <TextField label="Quantity" type="number" />
                                        </div>
                                    </FormLayout.Group>
                                </FormLayout>
                            </Stack.Item>
                        </Stack>
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