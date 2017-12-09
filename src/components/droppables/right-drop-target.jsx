import React from "react";
import { Droppable } from "react-beautiful-dnd";
import * as constants from "../../constants";

class RightDropTarget extends React.Component {
  render() {
    return (
      <Droppable droppableId={constants.DROPPABLE_SELECT} type={constants.TYPE_CARD}>
        {(provided, snapshot) => (
          <div className="right-drop-target" ref={provided.innerRef}>

          </div>
        )}
      </Droppable>
    );
  }
}

export default RightDropTarget;