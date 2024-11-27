import React from "react";
import Navbar from "./Navbar.jsx";

const PermissionMatrix = ({ roles, permissions, onPermissionChange }) => {
  return (
    <>
      <Navbar />
      <div>
        <h2>Permission Matrix</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Role</th>
              {permissions.map((perm) => (
                <th key={perm}>{perm}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.name}</td>
                {permissions.map((perm) => (
                  <td key={perm}>
                    <input
                      type="checkbox"
                      checked={role.permissions.includes(perm)}
                      onChange={() => onPermissionChange(role.id, perm)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PermissionMatrix;
