// @flow
import React, { Component } from 'react'
import { Link } from './../index'
import PropTypes from 'prop-types'

type Props = {
    userCurrent: PropTypes.object
};
class Navbar extends Component<Props> {
    
    render() {
        
        const user = this.props.userCurrent;
        
        console.log('userCurrent ', user);
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        {user.isAuthenticated 
                            ? <span className="btn-outline-primary my-2 mr-3 my-sm-0">{user.username}</span>
                            : <Link 
                                to={'/account/login'} 
                                className="btn-outline-primary my-2 mr-3 my-sm-0" 
                                type="button"
                             >
                                {`Log In`}
                             </Link>
                        }
                        {user.isAuthenticated 
                            ? <button className="btn btn-outline-danger">Logout</button>
                            : <Link to={'/account/signup'} className="btn-outline-primary my-2 my-sm-0" type="button">Sign Up</Link>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar

