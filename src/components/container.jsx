import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import LeftDropTarget from "./droppables/left-drop-target";
import RightDropTarget from "./droppables/right-drop-target";
import InventoryDropTarget from "./droppables/inventory-drop-target";
import Controls from "./controls";
import * as constants from "../constants";
import { selectWorker, unselectWorker, fetchMoreWorkers } from "../actions";

class Container extends React.Component {
  onDragEnd = (result) => {
    if (!result.destination) return;
    
    switch (result.destination.droppableId) {
      case constants.DROPPABLE_SELECT:
        this.props.selectWorker(result.draggableId);
        break;

      case constants.DROPPABLE_UNSELECT:
        this.props.unselectWorker(result.draggableId);
        break;
    
      default:
        break;
    }
  }

  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <div className="container">
          <LeftDropTarget />
          <InventoryDropTarget />
          <RightDropTarget />
          <Controls />
        </div>
      </DragDropContext>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectWorker,
  unselectWorker,
  fetchMoreWorkers
}, dispatch);

export default connect(null, mapDispatchToProps)(Container);
