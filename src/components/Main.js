import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HornedBeast from "./HornedBeast";
import beasts from "../beasts.json";
import FilterBeast from "./FilterBeast";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeasts: null,
      filteredBeasts: beasts,
    };
  }

  handleOpenModal = (beast) => {
    this.setState({ showModal: true, selectedBeast: beast });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedBeast: null });
  };

  handleChange = (event) => {
    const selection = event.target.value;

    let filteredBeasts = beasts.filter((beasts) => {
      if (selection === "One horn") {
        return beasts.horns === 1;
      }
      if (selection === "Two horns") {
        return beasts.horns === 2;
      }
      if (selection === "Three horns") {
        return beasts.horns === 3;
      }
      if (selection === "One hundred horns") {
        return beasts.horns === 100;
      } else {
        return beasts;
      }
    });
    this.setState({ filteredBeasts: filteredBeasts });
  };

  render() {
    return (
      <>
        <FilterBeast handleChange={this.handleChange} />
        <Container>
          <Row>
            {this.state.filteredBeasts.map((beasts) => {
              return (
                <Col xs={6} md={3}>
                  <HornedBeast
                    key={beasts.title}
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
