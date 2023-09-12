import React, { useState } from "react";
import "./Post.css";

const Post = ({ postObj }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = (e) => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDislike = (e) => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };

  const btnLike = isLiked ? "active-like-btn" : "";
  const btnDisLike = isDisliked ? "active-dislike-btn" : "";

  return (
    <div className="post-Container">
      <h4>{postObj.name}</h4>
      <p>{postObj.text}</p>
      <div className="buttons">
        <button className={btnLike} onClick={handleLike}>
          <img src="./Like.png" alt="" />
        </button>
        <button className={btnDisLike} onClick={handleDislike}>
          <img src="./Dislike.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Post;
