import React, { useState } from "react";
import Button from "../../components/button/Button";
import Post from "../../components/post/Post";
import { Posts } from "../../post";
import "./index.css";

function Main() {
  const [posts, setPosts] = useState(Posts);

  const hanldeOnDeletePost = (id) => {
    setPosts((oldPost) => {
      return oldPost.filter((post) => post.id !== id);
    });
  };

  return (
    <div className="container">
      <h1 className="content-label">Welcome to my blog website!</h1>
      <Button
        text="New"
        type={"add-button"}
        linkRedirect="/post/"
        contentType="add-button-text"
      />

      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.title}
            message={post.content}
            timestamp={post.timestamp}
            onDelete={() => hanldeOnDeletePost(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
