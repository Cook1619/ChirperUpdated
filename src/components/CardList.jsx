import React from "react";
import Card from "./Card";

const CardList = props => {
  let cards = props.cardArray.map((card, index) => {
    return <Card key={index} cardData={card} />;
  });

  return (
    <div className="container">
      <div className="row flex-md-row">
        <div className="col">{cards}</div>
      </div>
    </div>
  );
};

export default CardList;
