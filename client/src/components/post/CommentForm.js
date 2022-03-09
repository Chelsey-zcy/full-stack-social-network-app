import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addComment({ text }, postId);
    setText("");
  };
  return (
    <Fragment>
      <form className="form my-1" onSubmit={onSubmit}>
        <textarea
          name="comment"
          value={text}
          placeholder="leave your comment..."
          required
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <input type="submit" className="btn btn-primary my-1" value="Submit" />
      </form>
    </Fragment>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
