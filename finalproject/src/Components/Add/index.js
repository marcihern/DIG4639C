import React from "react";
import "./index.css";

class Add extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: ""
    };

  }

  componentDidMount() {

    fetch("https://apiexample.website/add", {
      "method": "POST",
      "headers": {
        "api": "hernandez",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": "name",
        "number": "number"
      })
    })
    .then(response => response.json())
    .then((data) => this.setState({added: data.added}) )
    .catch(err => {
      console.log(err);
    });

  }

  addContact = (event) => {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const number = document.querySelector("#number").value;

    this.setState({"name": name, "number": number});

  }

  render() {
    return (
      <div>
        <div class="wrapper">
          <form onSubmit={this.addContact}>
            <p><label for="name">New Contact Name</label></p>
            <p><input type="text" id="name" /></p>
            <p><label for="number">New Contact Number</label></p>
            <p><input type="text" id="number" /></p>
            <p><button class="add">Add Contact</button></p>
          </form>
        </div>
        <p class="newContact">{this.state.name} {this.state.number}</p>
      </div>
    );
  }

}

export default Add;
