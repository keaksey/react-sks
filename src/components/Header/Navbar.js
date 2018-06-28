// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Link, 
    // Logout 
} from './../Actions'
import styles from './Header.module.scss'
import './styles.scss'

type Props = {
    currentUser: PropTypes.object,
    gqlClient: PropTypes.object,
    history: PropTypes.object
};
class Navbar extends Component<Props, any> {
    state = {
        open: false
    };
    
    handleToggleClass = () => {
        this.setState((prevState) => ({open: !prevState.open}));
    };
    
    render() {
        const { open } = this.state;
        
        const user = this.props.currentUser;
        // console.log('user ', user)
        // const shop = user.shop;
        
        return (
            <nav className="navbar root-navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <Link className="navbar-brand" to="/">Car Rental</Link>
                <Button className="navbar-toggler p-0 border-0" type="button" 
                    data-toggle="offcanvas"
                    onClick={this.handleToggleClass}
                >
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <div className={`${styles.Collapse} ${open ? styles.Open : ''} navbar-collapse`} id="offcanvas">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        {/*shop.isOwner 
                            ? <Link to={'/your/shop'} className="btn btn-outline-primary my-2 mr-3 my-sm-0">Your Shop</Link>
                            : <Link to={'/your/shop/create'} className="my-2 mr-3 my-sm-0">Sell on our</Link>
                        */}
                        {!user.isAuthenticated &&
                            <Link to={'/account/signup'} className="my-2 my-sm-0 register-link" type="button">Register</Link>
                        }
                        {user.isAuthenticated 
                            ? <Link to={'/your/account'} className="my-2 mr-3 my-sm-0">{user.username}</Link>
                            : <Link 
                                to={'/account/login'} 
                                className="btn-outline-primary my-2 mr-3 my-sm-0" 
                                type="button"
                             >
                                {`Sign in`}
                             </Link>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar

