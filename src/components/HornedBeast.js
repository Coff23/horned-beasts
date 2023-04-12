import { Component } from "react";
import Image from 'react-bootstrap/Image';
import FavoritedImage from "./FavortitedImage";
import DislikeImage from "./DislikeImage";

class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image src={this.props.imageUrl} alt={this.props.description} title={this.props.title} key={this.props.keyword} fluid rounded></Image>
        <FavoritedImage />
        <DislikeImage />
      </>
    )
  }
}

export default HornedBeast;