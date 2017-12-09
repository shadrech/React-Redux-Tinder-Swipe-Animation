import React from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import * as constants from "../../constants";
import Card from "../card";

class InventoryDropTarget extends React.Component {
  render() {
    return (
      <Droppable droppableId={constants.DROPPABLE_INVENTORY} type={constants.TYPE_CARD}>
        {(provided, snapshot) => (
          <div className="inventory-drop-target" ref={provided.innerRef}>
            {this.props.workers.map((worker, i) => <Card key={i} worker={worker} index={i} />)}
          </div>
        )}
      </Droppable>
    );
  }
}

const mapStateToProps = (state) => ({
  workers: state.inventory.workers,
  fetching: state.inventory.isFetching
});

export default connect(mapStateToProps)(InventoryDropTarget);