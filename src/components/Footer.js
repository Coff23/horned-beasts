import { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "footer": "Joshua Coffey"
        }
    }

    handleClick = () => {
        const newFooter = this.state.footer === "Coffey, Joshua" ? "Joshua Coffey" : "Coffey, Joshua";
        this.setState({
            footer: newFooter
        });
    }
    render() {
        return <footer onClick={this.handleClick}>
            <p> {this.state.footer} </p>
        </footer>
    }

}

export default Footer;