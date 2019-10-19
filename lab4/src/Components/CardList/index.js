import React from "react";
import Card from "../Card/";
import data from "../../data.json";
import CardInput from "../CardInput/";

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {cards: data.cards};

}

removeCard = (event) => {
  let datatitle = event.target.getAttribute("datatitle");
  let localCards = this.state.cards;
  let changedCards = localCards.filter((card) => {
    return card.title !== datatitle;
  });

  this.setState({cards: changedCards});
}

addCard = (event) => {
  event.preventDefault();
  let titleElement = document.getElementById("newCardTitle");
  let contentElement = document.getElementById("newCardContent");

  if (titleElement.value.length !==0
    && contentElement.value.length !==0) {
      let newCard = {
        title: titleElement.value,
        content: contentElement.value
      };

      titleElement.value = "";
      contentElement.value = "";

      let localCards = this.state.cards;
      localCards.push(newCard);
      this.setState({cards: localCards});
    }
}

render() {
   return(
     <div>
      <CardInput addCard = {this.addCard} />
     {
       this.state.cards.map((card, index) => {
         return <Card
            key={index}
            title={card.title}
            content={card.content}
            dataclick={this.removeCard} />
       })
     }
     </div>
   );
}

}

export default CardList;
