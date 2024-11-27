// Mock API Service
export const fetchUsers = async () => {
  return [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
  ];
};

export const fetchRoles = async () => {
  return [
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
  ];
};
