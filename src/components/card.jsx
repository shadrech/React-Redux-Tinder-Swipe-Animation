import React from "react";
import { DragSource } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import * as constants from "../constants";
import { Star } from "./svgs";

const cardSource = {
  beginDrag(props) {
    return props.worker;
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
  getItem: monitor.getItem(),
  offset: monitor.getInitialClientOffset()
});

class Card extends React.Component {
  componentDidMount() {
    const {worker} = this.props;
    this.props.connectDragPreview(
      <div>Hello</div>
      , {
      captureDraggingState: true
    });
  }

  renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++)
      stars.push(<Star key={i} active={i <= this.props.worker.stars} />);

    return <div className="stars">{stars}</div>;
  }

  render() {
    const { worker, connectDragSource, isDragging } = this.props;
    const styles = {
      opacity: isDragging ? 0.5 : 1
    };

    return connectDragSource(
      <div className="card" style={styles}>
        <img src={`https://randomuser.me/api/portraits/${worker.gender}/${worker.id}.jpg`} alt="worker"/>
        <p>{worker.name}</p>
        {this.renderStars()}
      </div>
    );
  }
}

export default DragSource(constants.TYPE_CARD, cardSource, collect)(Card);