// @flow
import React from 'react'
import {
    Card,
    Page
} from '@shopify/polaris'

import { DataTableExample } from './../../components'

class Products extends React.Component<{}>{
    
    render() {
        return (
            <Page
                title="Products"
                primaryAction={{
                    content: 'Add new product',
                    url: '/your/products/new'
                }}
                fullWidth
            >
                <Card>
                    <Card.Section>
                        sdfd
                    </Card.Section>
                    <DataTableExample />
                </Card>
            </Page>
        )
    }
}

export default Products