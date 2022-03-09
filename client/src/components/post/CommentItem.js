import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteComment, getPost } from "../../actions/post";

const CommentItem = ({
  comment: { text, name, date, _id, avatar, user },
  postId,
  deleteComment,
  auth,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Commented on <Moment format="YYYY-MM-DD">{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            className="btn btn-danger"
            onClick={(e) => {
              deleteComment(postId, _id);
            }}
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  auth: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment, getPost })(
  CommentItem
);
