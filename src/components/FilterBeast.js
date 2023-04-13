import { Component } from "react";
import { Form } from "react-bootstrap";

class FilterBeast extends Component {
  render() {
    return (
      <Form>
        <Form.Select
          onChange={this.props.handleChange}
          aria-label="Default select example"
        >
          <option value="none">Unfiltered</option>
          <option value="One horn">One horn</option>
          <option value="Two horns">Two horns</option>
          <option value="Three horns">Three horns</option>
          <option value="One hundred horns">One hundred horns</option>
        </Form.Select>
      </Form>
    );
  }
}

export default FilterBeast;
