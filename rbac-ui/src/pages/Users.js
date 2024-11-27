import React, { useState } from "react";
import UserTable from "../components/UserTable";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
  ]);

  const handleEdit = (id) => alert(`Edit user with ID: ${id}`);
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
  );
};

export default Users;
