import React, { useState, useEffect } from "react";
import "./Profile.css";
import { posts } from "../servcies/UserService";
const Profile = () => {
  const [postsList, setPostsList] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    tags: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  useEffect(() => {
    const storedPosts = localStorage.getItem("postsList");
    if (storedPosts) {
      setPostsList(JSON.parse(storedPosts));
    }
  }, []);
  const toggleForm = () => {
    setShowForm(!showForm);
    if (editIndex !== null) {
      setEditIndex(null);
    }
  };
  const handleSaveUser = () => {
    try {
      if (editIndex !== null) {
        // Update existing post
        const updatedPosts = [...postsList];
        updatedPosts[editIndex] = formData;
        setPostsList(updatedPosts);
        localStorage.setItem("postsList", JSON.stringify(updatedPosts));
      } else {
        // Add new post
        const newPost = { ...formData };
        setPostsList([...postsList, newPost]);
        localStorage.setItem("postsList", JSON.stringify([...postsList, newPost]));
      }

      setFormData({ id: "", title: "", description: "", tags: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving post");
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const deletePost = (index) => {
    const updatedPosts = [...postsList];
    updatedPosts.splice(index, 1);
    setPostsList(updatedPosts);
    localStorage.setItem("postsList", JSON.stringify(updatedPosts));
  };
  const handleEditPost = (index) => {
    setEditIndex(index);
    setFormData(postsList[index]);
    setShowForm(true);
  };
  return (
    <div className="profile-main">
      <div className="main-left">
        <span className="logo-main"></span>
        <span className="logo-main2"></span>
        <p className="main-left-post">Posts</p>
        <a className="main-left-logout" href="/">
          Logout
        </a>
      </div>
      <div className="main-right">
        <button onClick={toggleForm} className="span-btn">
          <p className="add"> {showForm ? "Close Form" : "Add New "}</p>
        </button>
        {showForm && (
          <form className="form">
            <label className="form-title" htmlFor="id">
              ID:
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleFormChange}
            />
            <br /> <br />{" "}
            <label className="form-title" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleFormChange}
            />
            <br /> <br />{" "}
            <label className="form-title" htmlFor="description">
              Desc:
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleFormChange}
            />
            <br /> <br />{" "}
            <label className="form-title" htmlFor="tags">
              Tags:
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleFormChange}
            />
            <br /> <br />{" "}
            <button className="save-data" onClick={handleSaveUser}>
              Save
            </button>
          </form>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>ID</th> <th>Title</th> <th>Description</th> <th>Tags</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {postsList.map((post, index) => (
              <tr key={index}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>{post.tags}</td>
                <td>
                  <button onClick={() => handleEditPost(index)}>Edit</button>
                  <button onClick={() => deletePost(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Profile;
