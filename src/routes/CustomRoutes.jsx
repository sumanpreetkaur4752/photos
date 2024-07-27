import {Routes,Route} from 'react-router-dom';
import PhotoDesc from '../components/PhotoDesc/PhotoDesc'
import Photos from '../components/photos/Photos'
function CustomRoutes()
{
return(
    <Routes>
        <Route path='/' element={<Photos/>}/>
        <Route path='/image/:id' element={<PhotoDesc/>}/>
    </Routes>
)
}
export default CustomRoutes;