import React from 'react';

/* 
    If no results are found on Flickr, this will render
*/
const NotFound = (props) => {
    return (
        <div className="not-found">
            <h3>No Results Found</h3>
            <p>Your search "{props.query}" did not return any results. Please try again.</p>
        </div>
    )
}

export default NotFound;