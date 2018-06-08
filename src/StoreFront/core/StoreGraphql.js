// @flow
import gql from 'graphql-tag'

export const SHOP_QUERY = gql`
    query Shop($domain: String){
        shop(domain: $domain){
            id
            name
            domain
            isOwner
            currentTheme {
                name
                src
            }
        }
    }
`