import React from 'react';

const Photo = (props) => {
    let photo = props.data;
    return (
        <li>
            <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} alt={photo.title} />
        </li>
    )
}

export default Photo;