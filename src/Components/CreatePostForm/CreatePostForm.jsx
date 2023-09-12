import React, { useState } from "react";

const CreatePostForm = ({ onNewPost }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      text,
    };

    onNewPost(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="flex-box">
        <div className="input-form">
          <div>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Post</label>
            <input value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>

        <div className="btn-create">
          <button type="submit">Create</button>
        </div>
      </div>
    </form>
  );
};

export default CreatePostForm;
