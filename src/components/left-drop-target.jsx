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
    canDrop: monitor.canDrop()
  };
}

class LeftDropTarget extends React.Component {
  render() {
    return (
      <div className="left-drop-target">
        
      </div>
    );
  }
}

export default DropTarget("unselected", DropTargetSpec, collect)(LeftDropTarget);