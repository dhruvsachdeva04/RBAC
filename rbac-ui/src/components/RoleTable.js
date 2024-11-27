import React from "react";
import Navbar from "./Navbar.jsx";

const RoleTable = ({ roles, onEdit, onDelete }) => {
  return (
    <>
      <Navbar />
      <div>
        <h2>Role Management</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Role Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.name}</td>
                <td>
                  <button onClick={() => onEdit(role.id)}>Edit</button>
                  <button onClick={() => onDelete(role.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RoleTable;
