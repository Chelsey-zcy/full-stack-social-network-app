import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import PropTypes from "prop-types";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addPost({ text });
    setText("");
  };
  return (
    <div className="post-form">
      <div className="bg-light p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={onSubmit}>
        <textarea
          name="text"
          placeholder="Create a post!"
          required
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <input type="submit" className="btn btn-primary my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
