import "./App.css";
import Header from "./Components/Header/Header";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from "./Components/PostList/PostList";
import React, { useState, useEffect } from "react";
import initData from "./Data/data";

function App() {
  const [posts, setPosts] = useState([]);

  // This is for dummy data and "useEffect" in line 5
  useEffect(() => {
    setPosts(initData);
  }, []);

  const handleNewPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <div className="feed-container">
        <CreatePostForm onNewPost={handleNewPost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
