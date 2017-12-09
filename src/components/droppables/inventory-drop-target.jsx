import React from "react";
import { Droppable } from "react-beautiful-dnd";
import * as constants from "../../constants";
import Card from "../card";

import data from "../../data";

class LeftDropTarget extends React.Component {
  render() {
    return (
      <Droppable droppableId={constants.DROPPABLE_INVENTORY} type={constants.TYPE_CARD}>
        {(provided, snapshot) => (
          <div className="inventory-drop-target" ref={provided.innerRef}>
            {data.map((worker, i) => <Card key={i} worker={worker} index={i} />)}
          </div>
        )}
      </Droppable>
    );
  }
}

export default LeftDropTarget;