import React, { useState } from "react";
import RoleTable from "../components/RoleTable";

const Roles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
  ]);

  const handleEdit = (id) => alert(`Edit role with ID: ${id}`);
  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <RoleTable roles={roles} onEdit={handleEdit} onDelete={handleDelete} />
  );
};

export default Roles;
