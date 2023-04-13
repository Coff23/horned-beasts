import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HornedBeast from "./HornedBeast";
import beasts from "../beasts.json";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeasts: null,
    };
  }

  handleOpenModal = (beast) => {
    this.setState({ showModal: true, selectedBeast: beast });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedBeast: null });
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            {beasts.map((beasts) => {
              return (
                <Col xs={6} md={3}>
                  <HornedBeast
                    key={beasts._id}
                    title={beasts.title}
                    imageUrl={beasts.image_url}
                    description={beasts.description}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
