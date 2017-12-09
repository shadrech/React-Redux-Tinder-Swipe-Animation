import React from "react";
import { DropTarget } from "react-dnd";

const DropTargetSpec = {
  drop() {
    return "SELECTED";
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

class RightDropTarget extends React.Component {
  render() {
    const { connectDropTarget, isOver, monitor } = this.props;

    return connectDropTarget(
      <div className="right-drop-target">

      </div>
    );
  }
}

export default DropTarget("selected", DropTargetSpec, collect)(RightDropTarget);