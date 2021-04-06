import React from 'react';
import Photo from './Photo';
/* 
    Generates a list of photos by mapping the data from the api
*/
const PhotoList = (props) => {
    const results = props.data;
    let photos;
    
    photos = results.map(photo =>
        <Photo
            key={photo.id}
            data={photo}
            query={props.query}
        />
    )

    return (
        <div>
            <h2>{`Results for ${props.query}`}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default PhotoList;