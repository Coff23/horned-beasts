import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

class BeastModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <h1>{this.props.title}</h1>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={this.props.imageUrl}
            alt={this.props.title}
            fluid
            round
          ></Image>
          <p> {this.props.description} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BeastModal;
