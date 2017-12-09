import React from "react";
import { DragSource } from "react-dnd";
import * as constants from "../constants";
import { Star } from "./svgs";

const cardSource = {
  beginDrag(props) {
    return {
      text: "Card here!"
    };
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

class Card extends React.Component {
  renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++)
      stars.push(<Star active={i <= this.props.worker.stars} />);

    return <div className="stars">{stars}</div>;
  }

  render() {
    const {worker, connectDragSource} = this.props;
    return connectDragSource(
      <div className="card">
        <img src={`https://randomuser.me/api/portraits/${worker.gender}/${worker.id}.jpg`} alt="worker"/>
        <p>{worker.name}</p>
        {this.renderStars()}
      </div>
    );
  }
}

export default DragSource(constants.TYPE_CARD, cardSource, collect)(Card);