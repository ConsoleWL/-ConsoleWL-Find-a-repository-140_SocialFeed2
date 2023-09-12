import Post from "../Postt/Post";

const PostList = ({ posts = [] }) => {
  const postItem = posts.map((post) => <Post key={post.text} postObj={post} />);
  return <div className="container">{postItem}</div>;
};

export default PostList;
