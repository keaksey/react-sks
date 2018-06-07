// @flow
import React from 'react'
import PropTypes from 'prop-types'

export type Props = {
  children: PropTypes.Node
};

class AppProvider extends React.Component<Props>{
    
    render() {
        return React.Children.only(this.props.children);
    }
}

export default AppProvider