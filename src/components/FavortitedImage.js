import { Component } from "react";
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';


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

export default FavoritedImage;