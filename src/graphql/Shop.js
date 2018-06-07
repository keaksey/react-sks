// @flow
import gql from 'graphql-tag'

export const SHOP_CREATE = gql`
    mutation ShopCreate($input: ShopCreateInput!) {
        shopCreate(input: $input) {
            name
            domain
            errors {
                field
                messages
            }
        }
    }
`