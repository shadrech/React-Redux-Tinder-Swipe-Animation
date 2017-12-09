import React from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import LeftDropTarget from "./left-drop-target";
import RightDropTarget from "./right-drop-target";
import Card from "./card";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <LeftDropTarget />
        <Card worker={{
          "id": 4,
          "gender": "men",
          "name": "Sam Ham",
          "stars": 1
        }} />
        <RightDropTarget />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
