import React from "react";
import "./index.css";

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      profile: []
    };

  }

  componentDidMount() {

    fetch("https://apiexample.website/profile", {
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
      this.setState({profile: data});
    });

  }

render() {
  return(
    <div class="container">
      <p class="titleName">{this.state.profile.name}'s Contacts</p>
      <p>{this.state.profile.count} Contacts Listed</p>
    </div>
  );
}

}


export default Profile;
