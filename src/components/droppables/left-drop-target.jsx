import React from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import * as constants from "../../constants";

class LeftDropTarget extends React.Component {
  render() {
    return (
      <Droppable droppableId={constants.DROPPABLE_UNSELECT} type={constants.TYPE_CARD}>
        {(provided, snapshot) => (
          <div className="left-drop-target" ref={provided.innerRef}>
            <div className={`target-circle ${snapshot.isDraggingOver ? "active" : ""}`}></div>
          </div>
        )}
      </Droppable>
    );
  }
}

const mapStateToProps = (state) => ({
  workers: state.unselected
});

export default connect(mapStateToProps)(LeftDropTarget);