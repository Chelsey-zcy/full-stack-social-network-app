import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPost } from "../../actions/post";
import Spinner from "../layout/Spinner";
import CommentForm from "./CommentForm";
import PostItem from "../posts/PostItem";
import CommentItem from "./CommentItem";

const Post = ({ getPost, match, post: { post, loading } }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts">
        <button>Go Back</button>{" "}
      </Link>
      <PostItem post={post} />
      <CommentForm postId={match.params.id} />
      {post.comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} postId={post._id} />
      ))}
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, {
  getPost,
})(Post);
