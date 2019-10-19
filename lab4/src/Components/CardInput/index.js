import React from "react";

class CardInput extends React.Component {
  render() {
    return(
      <form onSubmit = {this.props.addCard}>
        <label>Course: </label>
        <input type="text" name="cardTitle" id="newCardTitle" />
        <br />
        <label>Instructor: </label>
        <input type="text" name="cardContent" id="newCardContent" />
        <br />
        <button type="submit">New Card</button>
      </form>
    );
  }
}

export default CardInput;
