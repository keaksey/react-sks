// @flow
import gql from 'graphql-tag'

export const CURRENT_USER_QUERY = gql`
    {
        currentUser {
            id
            username
            name
            isAuthenticated
        }
    }
`

export const USER_REGISTER = gql`
    mutation UserRegister($input: UserRegisterInput!) {
        userRegister(input: $input) {
            username
            errors {
                field
                message
            }
        }
    }
`

// user login
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
