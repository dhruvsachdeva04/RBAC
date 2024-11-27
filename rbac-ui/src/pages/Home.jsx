import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../styles/Home.css"; // Import the CSS file for styling

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from the backend API
    fetch("http://localhost:8801/api/users/data")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleDelete = async (userId) => {
    try {
      await fetch(`http://localhost:8801/api/users/${userId}`, {
        method: "DELETE",
      });
      setUsers(users.filter((user) => user._id !== userId)); // Update UI
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (userId) => {
    navigate(`/edit-user/${userId}`); // Navigate to the edit page with userId
  };
  

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>User Table</h1>
        <button className="add-user-button" onClick={() => navigate("/add-user")}>
          Add User
        </button>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
