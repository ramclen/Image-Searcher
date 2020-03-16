import React from "react";

class ImageCard extends React.Component {
  state = {spans: 2};
  constructor(props){
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', e => {
      const height = this.imageRef.current.clientHeight;
      console.log(Math.ceil(height/10))
      this.setState({spans: Math.ceil(height/10)})
    })
  }

  render(){
    return (
    <div style={{gridRowEnd: `span ${this.state.spans}`}} className="ImageList">
      <img  ref={this.imageRef} key={this.props.image.id} src={this.props.image.urls.regular} />
    </div>
    );
  }
}

export default ImageCard;