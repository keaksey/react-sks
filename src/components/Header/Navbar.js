// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Link, Logout } from './../Actions'

type Props = {
    currentUser: PropTypes.object,
    gqlClient: PropTypes.object,
    history: PropTypes.object
};
class Navbar extends Component<Props> {
    
    render() {
        
        const user = this.props.currentUser;
        const shop = user.shop;
        
        return (
            <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        {shop.isOwner 
                            ? <Link to={'/your/shop'} className="btn btn-outline-primary my-2 mr-3 my-sm-0">Your Shop</Link>
                            : <Link to={'/your/shop/create'} className="my-2 mr-3 my-sm-0">Sell on our</Link>
                        }
                        {user.isAuthenticated 
                            ? <Link to={'/your/account'} className="my-2 mr-3 my-sm-0">{user.username}</Link>
                            : <Link 
                                to={'/account/login'} 
                                className="btn-outline-primary my-2 mr-3 my-sm-0" 
                                type="button"
                             >
                                {`Log In`}
                             </Link>
                        }
                        {user.isAuthenticated 
                            ? <Logout 
                                history={this.props.history}
                                className="btn-outline-danger"
                              >
                                Logout
                              </Logout>
                            : <Link to={'/account/signup'} className="btn-outline-primary my-2 my-sm-0" type="button">Sign Up</Link>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar

