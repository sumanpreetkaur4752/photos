import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './PhotoDesc.css'
function PhotoDesc()
{
    const {id} = useParams() 
    const [photo, setPhoto] = useState({});
    async function downloadPhoto()
    {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response.data);
        setPhoto(
            {
                photo:response.data.photo.url,
                title: response.data.photo.title,
                desc:response.data.photo.description
            }
        )
    }
    useEffect(()=>{
        downloadPhoto();
    },[])
    return(
        <div className="photo-desc">
         <img className="photo" src={photo.photo}/>
         <div className="title-desc">
         <div> <span className="title">{photo.title}</span> </div>
         <div> <span className="desc">{photo.desc}</span> </div>
         </div>
         
        </div>
    )
}
export default PhotoDesc;