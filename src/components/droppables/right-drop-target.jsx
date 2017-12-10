import React from "react";
import { connect } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";
import * as constants from "../../constants";

class RightDropTarget extends React.Component {
  render() {
    return (
      <Droppable droppableId={constants.DROPPABLE_SELECT} type={constants.TYPE_CARD}>
        {(provided, snapshot) => (
          <div className="right-drop-target" ref={provided.innerRef}>
            <div className={`target-circle ${snapshot.isDraggingOver ? "active" : ""}`}></div>

            {/* Draggable acts as a magnet to draw draggable cards to its position */}
            <Draggable draggableId="RIGHT_DUMMY_NODE" type={constants.TYPE_CARD}>
              {(provided, snapshot) => {
                return (
                  <div className="card" ref={provided.innerRef} style={provided.draggableStyle} {...provided.dragHandleProps}>
                  </div>
                );
              }}
            </Draggable>
          </div>
        )}
      </Droppable>
    );
  }
}

const mapStateToProps = (state) => ({
  workers: state.selected
});

export default connect(mapStateToProps)(RightDropTarget);