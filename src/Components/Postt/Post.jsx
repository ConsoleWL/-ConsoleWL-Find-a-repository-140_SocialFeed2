import React, { useState } from "react";
import "./Post.css";
import "./images/Like.png";

const Post = ({ postObj }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = (e) => {
    setIsLiked(!isLiked);
  };

  const handleDislike = (e) => {
    setIsDisliked(!isDisliked);
  };

  //   would be nice to know if  like is active and then you toggle dislike and like automatically becomes unactive
  const btnLike = isLiked ? "active-like-btn" : "";
  const btnDisLike = isDisliked ? "active-dislike-btn" : "";

  return (
    <div className="post-Container">
      <h4>{postObj.name}</h4>
      <p>{postObj.text}</p>
      <div className="buttons">
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
