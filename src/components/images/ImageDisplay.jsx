import { useParams } from 'react-router-dom';

const ImageDisplay = () => {
  const { height, width } = useParams();
  console.log(height, width);
  return (
    <>
      Now showing image with dimensions {height} {width}
    </>
  )
}

export default ImageDisplay;
