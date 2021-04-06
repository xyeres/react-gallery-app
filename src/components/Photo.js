import React from 'react';
import { Link } from 'react-router-dom';
/* 
    Returns an image with a link to the photo's dynamic URL route
*/
const Photo = (props) => {
    let photo = props.data;
    return (
        <li>
            <Link to={`/q/${props.query}/${photo.id}`}>
                <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} alt={photo.title} />
            </Link>
        </li>
    )
}

export default Photo;