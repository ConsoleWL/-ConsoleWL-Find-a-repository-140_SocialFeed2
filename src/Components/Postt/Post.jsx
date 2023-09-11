const Post = ({ postObj }) => {
  return (
    <div>
      <h4>{postObj.name}</h4>
      <p>{postObj.text}</p>
      <div>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </div>
  );
};

export default Post;
