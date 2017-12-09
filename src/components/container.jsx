import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import LeftDropTarget from "./droppables/left-drop-target";
import RightDropTarget from "./droppables/right-drop-target";
import InventoryDropTarget from "./droppables/inventory-drop-target";

class Container extends React.Component {
  onDragStart = (initial) => {
    // initial.draggableId: the id of the Draggable that is now dragging

    // initial.type: the type of the Draggable that is now dragging

    // initial.source: the location (droppableId and index) of where the dragging item has started within a Droppable.
  }
  onDragEnd = (result) => {
    // result.draggableId: the id of the Draggable that was dragging.

    // result.type: the type of the Draggable that was dragging.

    // result.source: the location where the Draggable started.

    // result.destination: the location where the Draggable finished. The destination will be null if the user dropped into no position (such as outside any list) or if they dropped the Draggable back into the same position in which it started.
  }

  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <div className="container">
          <LeftDropTarget />
          <InventoryDropTarget />
          <RightDropTarget />        
        </div>
      </DragDropContext>
    );
  }
}

export default Container;
