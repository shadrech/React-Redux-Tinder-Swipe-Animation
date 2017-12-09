import React from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import LeftDropTarget from "./left-drop-target";
import RightDropTarget from "./right-drop-target";
import Cards from "./cards";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <LeftDropTarget />
        <RightDropTarget />
        <Cards />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
