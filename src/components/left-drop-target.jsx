import React from "react";
import { DropTarget } from "react-dnd";

const DropTargetSpec = {
  drop() {
    return "UNSELECTED";
  },
  hover() {

  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    itemDragged: monitor.getItem()
  };
}

class LeftDropTarget extends React.Component {
  render() {
    const {connectDropTarget, itemDragged} = this.props;

    return connectDropTarget(
      <div className="left-drop-target">
        <p>Dragged persons {itemDragged ? itemDragged.name : "null"}</p>
      </div>
    );
  }
}

export default DropTarget("unselected", DropTargetSpec, collect)(LeftDropTarget);