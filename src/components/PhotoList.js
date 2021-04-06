import React from 'react'; 
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = (props) => {
    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => 
            <Photo 
                key={photo.id}
                data={photo}
            />
        )
    } else {
        photos = <NotFound query={props.query} />
    }

    return (
        <ul>
            {photos}
        </ul>
    )
}

export default PhotoList;