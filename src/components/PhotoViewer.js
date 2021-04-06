import React from 'react';
import { Link } from 'react-router-dom';

/* 
    Returns an image with caption for large image view from gallery
*/
const PhotoViewer = (props) => {
    let photo = props.data[0];

    return (
        <div className="caption">
            <Link to={`/q/${props.query}`}>&#x1F519; back to search results</Link>
            <p>{photo.title}</p>
            <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} width="950px" alt={photo.title} />
        </div>
    )
}

export default PhotoViewer;