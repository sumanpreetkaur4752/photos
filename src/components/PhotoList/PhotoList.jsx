import {Link} from 'react-router-dom';
import React from 'react';
import './PhotoList.css'
function PhotoList({ url ,id}) {
    return (
        <div className='photo-wrapper'>
            <Link to={`/image/${id}`}>
            <img className='photo' src={url} alt="photo" />
            </Link>
        </div>
    );
}

export default PhotoList;
