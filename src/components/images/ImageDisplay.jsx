import { useParams } from 'react-router-dom';

const ImageDisplay = () => {
  const { width, height } = useParams();
  return (
    <>
      Now showing image with dimensions {width} {height}
      <img src='/{width}/{height}' alt='dimensions {width} by {height}'>
      </img>
    </>
  )
}

export default ImageDisplay;
