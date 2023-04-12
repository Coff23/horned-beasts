import { Component } from "react";
import { HandThumbsDownFill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';


class DislikeImage extends Component {
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
        <Button onClick={this.handleClick}><HandThumbsDownFill></HandThumbsDownFill> <span>{this.state.timesClicked}</span></Button>
      )
    }
  }

  export default DislikeImage;