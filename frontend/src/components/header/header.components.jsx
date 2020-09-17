import React from 'react'
import { Link } from 'react-router-dom';

import {Header} from './header.styles'

const Headers = () => {
    const logout = () => {
		localStorage.removeItem('isAuthenticated')
		localStorage.removeItem('user');
        //return history.push('/login');
        window.location = '/login';
	}
    return (
        <div>
            <Header>
                <Link to="/dashboard" className="logo" >
                    <span className="lgb-open"></span>
                </Link>
                <nav className="navbar">
                    <Link to="#" className="toggle-sidebar" >
                        <span className="fa fa-bars"></span>
                    </Link>
                    <div className="navbar-custom-menu">
                        <ul>
                            <li><span className="fa fa-bell-o"></span></li>
                            <li>
                                <div className="userAdmin">
                                    <div className="name-user">
                                        <span>Hola</span>
                                        <span>Admin</span>
                                    </div>
                                    <div className="image-user">
                                        <figure>
                                            <span>AD</span>
                                        </figure>
                                    </div>
                                    <div className="drowp-list-user">
                                        <span onClick={logout}>cerrar session</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Header>
            
        </div>
    )
}

export default Headers
