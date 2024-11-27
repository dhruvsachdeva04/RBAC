import React from "react";
import Navbar from "./Navbar.jsx";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <>
      <Navbar />
      <div>
        <h2>User Management</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => onEdit(user.id)}>Edit</button>
                  <button onClick={() => onDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
