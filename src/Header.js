import { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "header": "Beast Judge"
        }
    }

    handleClick = () => {
        const newHeader = this.state.header === "Vote!" ? "Beast Judge" : "Vote!";
        this.setState({
            header: newHeader
        });
    }

    render() {
        return <h1 onClick={this.handleClick}> {this.state.header} </h1>
    }
}

export default Header;