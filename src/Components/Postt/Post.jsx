import React, { useState } from "react";
import "./Post.css";

const Post = ({ postObj }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = (e) => {
    setIsLiked(!isLiked);
  };

  const handleDislike = (e) => {
    setIsDisliked(!isDisliked);
  };

  const btnLike = isLiked ? "active-like-btn" : "";
  const btnDisLike = isDisliked ? "active-dislike-btn" : "";

  return (
    <div>
      <h4>{postObj.name}</h4>
      <p>{postObj.text}</p>
      <div>
        <button className={btnLike} onClick={handleLike}>
          Like
        </button>
        <button className={btnDisLike} onClick={handleDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
