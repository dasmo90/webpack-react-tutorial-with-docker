import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      someText: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { someText } = this.state;
    return (
        <div>
          <p style={{fontFamily: "courier"}}>{someText}</p>
          <Input
              text="Some text"
              label="some-text"
              type="text"
              id="some-text"
              value={someText}
              handleChange={this.handleChange}
          />
        </div>
    );
  }
}

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
