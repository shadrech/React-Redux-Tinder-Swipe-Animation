import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import LeftDropTarget from "./droppables/left-drop-target";
import RightDropTarget from "./droppables/right-drop-target";
import InventoryDropTarget from "./droppables/inventory-drop-target";
import Controls from "./controls";
import * as constants from "../constants";
import { selectWorker, unselectWorker } from "../actions";

class Container extends React.Component {
  onDragEnd = (result) => {
    // result.draggableId: the id of the Draggable that was dragging.

    // result.type: the type of the Draggable that was dragging.

    // result.source: the location where the Draggable started.

    // result.destination: the location where the Draggable finished. The destination will be null if the user dropped into no position (such as outside any list) or if they dropped the Draggable back into the same position in which it started.

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
  unselectWorker
}, dispatch);

export default connect(null, mapDispatchToProps)(Container);
