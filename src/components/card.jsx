import React from "react";
import { Draggable } from "react-beautiful-dnd";
import * as constants from "../constants";
import { Star } from "./svgs";

class Card extends React.Component {
  renderCard = () => {
    const {worker, index} = this.props;
    const styles = {
      zIndex: 100 - index,
      transform: `
        translateY(${index * 10}px)
        translateX(-50%) 
        scale(${1 - (index * 0.02)}) 
      `
    }

    return (
      <div className="card" style={styles}>
        <img src={`https://randomuser.me/api/portraits/${worker.gender}/${worker.id}.jpg`} alt="worker"/>
        <p>{worker.name}</p>
        {this.renderStars()}
      </div>
    )
  }

  renderDraggableCard = () => {
    const {worker, index} = this.props;

    return (
      <Draggable draggableId={worker.id} type={constants.TYPE_CARD}>
      {(provided, snapshot) => {
          const styles = {
            ...provided.draggableStyle,
            zIndex: 100,
            left: "calc(50% - 125px)"
          }
          return (
            <div ref={provided.innerRef} className="card" style={styles} {...provided.dragHandleProps}>
              <img src={`https://randomuser.me/api/portraits/${worker.gender}/${worker.id}.jpg`} alt="worker"/>
              <p>{worker.name}</p>
              {this.renderStars()}
            </div>
          );
        }}
      </Draggable>
    )
  }

  renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++)
      stars.push(<Star key={i} active={i <= this.props.worker.stars} />);

    return <div className="stars">{stars}</div>;
  }

  render() {
    return this.props.index === 0 ? this.renderDraggableCard() : this.renderCard();
  }
}

export default Card;