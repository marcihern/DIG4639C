import React from "react";
import "./index.css";

class Remove extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      removed: {}
    };

}

componentDidMount() {

  fetch("https://apiexample.website/remove", {
    "method": "POST",
    "headers": {
      "api": "hernandez",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "body": JSON.stringify({
      "position": ""
    })
  })
  .then(response => response.json())
  .then((data) => this.setState({removed: data.removed}) )
  .catch(err => {
    console.log(err);
  });

}

render() {
  return (
    <div class="reContainer">
      <form onSubmit={this.props.removecontact}>
        <button class="remove">Remove Contact</button>
      </form>
    </div>
  );
}

}


export default Remove;
