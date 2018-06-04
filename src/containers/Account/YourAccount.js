// @flow
import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    currentUser: PropTypes.object
};
class YourAccount extends React.Component<Props> {
    
    render() {
        const user = this.props.currentUser;
        
        return (
            <section className="container">
                {user.username}
            </section>
        )
    }
}

export default YourAccount
