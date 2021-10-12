import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchImageByParams } from '../../services/imageService';

const ImageDisplay = (props) => {
  const { width, height } = useParams();
  const [state, setState] = useState({data: ""});
  fetchImageByParams(width, height, function(retCallback){
      setState({data: retCallback.data})
  });
  //console.log(height);
  console.log("IMAGE LOADED?")
  return (
      <>
        Now showing image with dimensions {width} {height}
        <object data={state.data} type="image/svg+xml">
        </object>
      </>
  )

}

export default ImageDisplay;
