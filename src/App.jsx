import "./App.css";
import Header from "./Components/Header/Header";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from "./Components/PostList/PostList";

function App() {
  const postsArray = [
    {
      name: "Nikki",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum unde delectus ullam quod voluptatibus nobis magni magnam aliquam? Libero quisquam deleniti veniam officiis placeat, nostrum odit voluptates porro neque?",
    },
    {
      name: "Sticky",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum unde delectus ullam quod voluptatibus nobis magni magnam aliquam? Libero quisquam deleniti veniam officiis placeat, nostrum odit voluptates porro neque?",
    },
    {
      name: "Slicky",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum unde delectus ullam quod voluptatibus nobis magni magnam aliquam? Libero quisquam deleniti veniam officiis placeat, nostrum odit voluptates porro neque?",
    },
  ];
  return (
    <div className="App">
      <Header />
      <div>
        <CreatePostForm />
        <PostList posts={postsArray} />
      </div>
    </div>
  );
}

export default App;
