import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./Post.css";

function Post(props) {
  const { username, message, timestamp, onDelete, id } = props;
  return (
    <Link to={`/post/${id}`} className="post">
      <Link to={`/post/${id}`} className="post-username">
        {username}
      </Link>
      <p className="post-message">{message}</p>
      <p className="post-timestamp">{timestamp.toLocaleString()}</p>
      <div className="button-container">
        <Button
          text="EDIT"
          linkRedirect={`post/edit/${id}`}
          type={"detail-button"}
        />
        <button onClick={onDelete} className="delete-button">
          DELETE
        </button>
      </div>
    </Link>
  );
}

export default Post;
