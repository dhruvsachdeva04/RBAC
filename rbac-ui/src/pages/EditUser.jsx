import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../styles/AddUser.css"; // You can use the same CSS file for styling

const EditUser = () => {
  const { userId } = useParams(); // Get userId from URL
  const [user, setUser] = useState({ name: "", role: "" });
  const navigate = useNavigate();

  // Fetch the user details using userId
  useEffect(() => {
    fetch(`http://localhost:8801/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);

  // Handle input changes for name and role
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle updating the user
  const handleUpdateUser = async () => {
    if (!user.name || !user.role) {
      alert("Please provide both name and role!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8801/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        alert("User updated successfully!");
        navigate("/"); // Redirect back to the home page
      } else {
        alert("Error updating user. Please try again.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="add-user-container">
        <h1>Edit User</h1>
        <div className="form-group">
          {/* Set the value of the input to be the current user's name */}
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={user.name}  // Display the name from the database
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            className="role-dropdown"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <button className="add-button" onClick={handleUpdateUser}>
          Update User
        </button>
        <button className="cancel-button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default EditUser;
