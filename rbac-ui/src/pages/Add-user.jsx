import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../styles/AddUser.css"; // Optional CSS file for styling

const AddUser = () => {
  const [newUser, setNewUser] = useState({ name: "", role: "" });
  const navigate = useNavigate();

  const handleAddUser = async () => {
    if (!newUser.name || !newUser.role) {
      alert("Please provide both name and role!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8801/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const createdUser = await response.json();
      alert("User added successfully!");
      setNewUser({ name: "", role: "" }); // Clear input fields
      navigate("/"); // Redirect back to the home page
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="add-user-container">
      <h1>Add New User</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>
      <button className="add-button" onClick={handleAddUser}>
        Add User
      </button>
      <button className="cancel-button" onClick={() => navigate("/")}>
        Cancel
      </button>
    </div>
    </>
  );
};

export default AddUser;
