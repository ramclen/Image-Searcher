import React from 'react';
import ImageCard from "./ImageCard";
import './ImageList.css'

class ImageList extends React.Component {
  componentDidUpdate(){
    // console.log(this.props.images);
  }

  render() {
    const imageList = this.props.images.map(image => {
      return <ImageCard key={image.id} image={image} />
    })

    return (
      <div className="ImageList">
        {imageList}
      </div>
    );
  }
}

export default ImageList;