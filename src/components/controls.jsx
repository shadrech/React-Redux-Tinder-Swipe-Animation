import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Like, Dislike } from "./svgs";
import { selectWorker, unselectWorker } from "../actions";

const Controls = (props) => {
  const handleLikeClick = () => {
    props.selectWorker();
  };
  const handleDislikeClick = () => {
    props.unselectWorker();
  };

  return (
    <div className="controls">
      <div id="dislike" onClick={handleDislikeClick}>
        <Dislike />
      </div>
      <div id="like" onClick={handleLikeClick}>
        <Like />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectWorker,
  unselectWorker
}, dispatch);

export default connect(null, mapDispatchToProps)(Controls);