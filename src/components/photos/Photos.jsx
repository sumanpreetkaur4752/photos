import React, { useEffect, useState } from "react";
import axios from 'axios';
import PhotoList from '../PhotoList/PhotoList';
import './Photos.css'
import '../PhotoList/PhotoList.css'
function Photos() {
    const [photoList, setPhotoList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function downloadPhotos() {
        try {
            // Fetch the list of photo URLs
            const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=18');
            const photosResults = response.data.photos;
     
            // Map the results to an array of objects with id and url
            const photoResultList = photosResults.map((photo) => ({
                url: photo.url,
                id: photo.id
            }));

            // Set the state with the fetched photo data
            setPhotoList(photoResultList);
        } catch (error) {
            console.error('Error fetching photos:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        downloadPhotos();
    }, []);

    return (
        <div className="photo-grid">
            {loading ? (
                "Loading..."
            ) : (
                photoList.map((p) => (
                    <PhotoList  key={p.id} url={p.url} id={p.id} />
                ))
            )}
        </div>
    );
}

export default Photos;
