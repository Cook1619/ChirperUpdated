import React from "react";

const Card = props => {
  return (
    <div className="card bg-light mb-3 m-0 ">
      <div className="card-header bg-dark text-white">
        {props.cardData.name} @{props.cardData.handle}
      </div>
      <div className="card-body ">
        <h5 className="card-title">{props.cardData.body}</h5>
      </div>
    </div>
  );
};

export default Card;
