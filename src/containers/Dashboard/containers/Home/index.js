// @flow
import React from 'react'

import {
    Card,
    Page
} from '@shopify/polaris'

class General extends React.Component<{}>{
    render() {
        return (
            <Page
                title="General"
            >
                <Card sectioned title="General">
                    hello world
                </Card>
            </Page>
        )
    }
}

export default General
