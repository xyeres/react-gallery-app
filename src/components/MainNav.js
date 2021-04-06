import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/q/cats">Cats</NavLink></li>
                <li><NavLink to="/q/dogs">Dogs</NavLink></li>
                <li><NavLink to="/q/computers">Computers</NavLink></li>
            </ul>
            <Route exact path="/q" render={ () => <Redirect to="/" /> } />
        </nav>
    )
}

export default MainNav