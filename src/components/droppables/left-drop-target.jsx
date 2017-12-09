import React from "react";
import { Droppable } from "react-beautiful-dnd";
import * as constants from "../../constants";

class LeftDropTarget extends React.Component {
  render() {
    return (
      <Droppable droppableId={constants.DROPPABLE_UNSELECT} type={constants.TYPE_CARD}>
        {(provided, snapshot) => (
          <div className="left-drop-target" ref={provided.innerRef}>
            
          </div>
        )}
      </Droppable>
    );
  }
}

export default LeftDropTarget;