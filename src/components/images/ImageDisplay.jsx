import { useParams } from 'react-router-dom';
import { fetchImageByParams } from '../../services/imageService';

const ImageDisplay = () => {
  const { height, width } = useParams();
  const image = fetchImageByParams(height, width);
  console.log(height);
  console.log(image);
  return (
    <>
      Now showing image with dimensions {height} {width}
      <object data={image.data} type="image/svg+xml">
      </object>
    </>
  )
}

export default ImageDisplay;
