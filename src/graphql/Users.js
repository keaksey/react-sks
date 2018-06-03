import gql from 'graphql-tag'

export const CURRENT_USER_QUERY = gql`
    {
        userCurrent {
            id
            username
            name
            isAuthenticated
        }
    }
`
export const LOGIN_MUTATION = gql`
    mutation TokenCreate($username: String!, $password: String!) {
        tokenCreate(username: $username, password: $password) {
            token,
            errors {
                field
                message
            }
        }
    }
`
