import { Component } from "react";
import Image from "react-bootstrap/Image";
import FavoritedImage from "./FavortitedImage";
import DislikeImage from "./DislikeImage";
import BeastModal from "./modal";

class HornedBeast extends Component {
  state = {
    showModal: false,
  };

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <>
        <div onClick={this.handleShow}>
          <h2>{this.props.title}</h2>
          <Image
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            key={this.props.keyword}
            fluid
            rounded
          ></Image>
        </div>
        <FavoritedImage />
        <DislikeImage />
        <BeastModal
          title={this.props.title}
          imageUrl={this.props.imageUrl}
          description={this.props.description}
          show={this.state.showModal}
          onClose={this.handleClose}
        />
      </>
    );
  }
}

export default HornedBeast;
