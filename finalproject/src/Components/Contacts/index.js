import React from "react";
import "./index.css";

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };

  }

  componentDidMount() {

    fetch("https://apiexample.website/contacts", {
      "method": "GET",
      "headers": {
        "api": "hernandez",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      this.setState({contacts: data.contacts});
    });

  }

  render() {

    return(
      <div class="conContainer">
        {
          this.state.contacts.map((value, index) => {
            return <p key={index}> {value.name} {value.number}</p>;
          })
        }
      </div>
    );

  }

}


export default Contacts;
