import React, { useState } from 'react'
import BackgroundBox from './components/BackgroundBox'
import Upload from './components/Upload'
import Uploading from './components/Uploading'
import Share from './components/Share'
import { Switch, Route} from "react-router-dom";

const App = () => {
    const [imageUrl, setImageUrl] = useState()
    
    const uploadImage = async (image = {}, url = '/imageUpload') => {
        const formData = new FormData() //Sends image as part of from data to avoid wierd Boundry issues when sending multipart/form data when not part of an actual form
        formData.append('newPhoto', image)
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(({ url }) => setImageUrl(url))
    }

    return (
        <BackgroundBox>
            <Switch>
                <Route path='/uploading'>
                    <Uploading />
                </Route>
                <Route path='/share'>
                    <Share imageUrl={imageUrl} />
                </Route>
                <Route path='/'>
                    <Upload uploadImage={uploadImage} />
                </Route>
            </Switch>
        </BackgroundBox>
    )

}

export default App
 