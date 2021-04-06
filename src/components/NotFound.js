import React from 'react';


const NotFound = (props) => {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search "{props.query}" did not return any results. Please try again.</p>
        </li>
    )
}

export default NotFound;