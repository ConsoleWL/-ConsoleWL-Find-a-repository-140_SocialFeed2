import React, { useState } from "react";

const CreatePostForm = ({}) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      text,
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Post</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePostForm;
