import React, { Fragment } from "react";
import Post from "./Post/post";
import useStyles from "./style";
const Posts = () => {
  return (
    <Fragment>
      <h1>POSTS</h1>
      <Post></Post>
      <Post></Post>
    </Fragment>
  );
};

export default Posts;
