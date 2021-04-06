import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/q/costa%20rica">Costa Rica</NavLink></li>
                <li><NavLink to="/q/Bahamas%20beach">Bahamas</NavLink></li>
                <li><NavLink to="/q/Jamaica%20beach">Jamaica</NavLink></li>
            </ul>
            {/* If the user requests /q without a query then simply redirect them to the home page */}
            <Route exact path="/q" render={ () => <Redirect to="/" /> } />
        </nav>
    )
}

export default MainNav