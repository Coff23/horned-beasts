import { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';

class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image src={this.props.imageUrl} alt={this.props.description} title={this.props.title} fluid rounded></Image>
        <FavoritedImage />
      </>
    )
  }
}

class FavoritedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let addClick = this.state.timesClicked + 1;
    this.setState({
      timesClicked: addClick
    })
  }

  render() {
    return (
      <Button onClick={this.handleClick}><HeartFill></HeartFill> <span>{this.state.timesClicked}</span></Button>
    )
  }
}

export default HornedBeast;