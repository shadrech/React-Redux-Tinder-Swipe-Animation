import React, { Component } from "react";
import Card from "./card";

class Cards extends Component {
  render() {
    return (
      <div className="cards-wrapper">
        <Card worker={{
            "id": 4,
            "gender": "men",
            "name": "Sam Ham",
            "stars": 1
          }} />
      </div>
    );
  }
}

export default Cards;