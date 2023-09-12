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
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={30}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* If I add a very long text for some reason it does not automatically go the the next line ... it's just going to right out of the page =() */}
          <div>
            <label>Post</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              maxLength={500}
              placeholder="Enter your text...max length 500 symbols"
              required
            />
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
