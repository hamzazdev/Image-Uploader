import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import BackgroundBox from './components/BackgroundBox';
import Upload from './components/Upload';
import Uploading from './components/Uploading';
import Share from './components/Share';

const App = () => {
  const [imageUrl, setImageUrl] = useState();

  const uploadImage = async (image = {}, fetchUrl = '/imageUpload') => {
    // Sends image as part of from data to avoid wierd Boundry issues
    // when sending multipart/form data when not part of an actual form
    const formData = new FormData();
    formData.append('newPhoto', image);
    fetch(fetchUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then(({ url }) => setImageUrl(url));
  };

  return (
    <BackgroundBox>
      <Switch>
        <Route path="/uploading">
          <Uploading />
        </Route>
        <Route path="/share">
          <Share imageUrl={imageUrl} />
        </Route>
        <Route path="/">
          <Upload uploadImage={uploadImage} />
        </Route>
      </Switch>
    </BackgroundBox>
  );
};

export default App;
