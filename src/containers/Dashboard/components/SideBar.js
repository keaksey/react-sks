// @flow
import React from 'react'
import { NavLink } from './../../../components'
import PropTypes from 'prop-types'

type Props = {
    match: PropTypes.object
};
class SideBar extends React.PureComponent<Props> {
    render() {
        
        return (
            <ul className="list-group">
                <li className="list-group-item">Dashboard</li>
                <LinkItem to={`/your/account`}>Account</LinkItem>
                <LinkItem to={`/your/profile`}>Public Profile</LinkItem>
                <LinkItem to={`/your/shop`}>Shop Setting</LinkItem>
                <LinkItem to={`/your/products`}>Products</LinkItem>
                <LinkItem to={`/your/collections`}>Collections</LinkItem>
            </ul>
        )
    }
}

const LinkItem = (props: any) => {
    return (
        <NavLink className={`list-group-item list-group-item-action ${props.className || ''}`} 
            to={props.to}
            active="active"
        >
            {props.children}
        </NavLink>
    )
}

export default SideBar

