import Post from "../Postt/Post";

const PostList = ({ posts = [] }) => {
  const postItem = posts.map((post) => <Post key={post} postObj={post} />);
  return <div>{postItem}</div>;
};

export default PostList;
