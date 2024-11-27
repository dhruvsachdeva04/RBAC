import React, { useState } from "react";
import PermissionMatrix from "../components/PermissionMatrix";

const Permissions = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ]);

  const permissions = ["Read", "Write", "Delete"];

  const handlePermissionChange = (roleId, perm) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(perm)
                ? role.permissions.filter((p) => p !== perm)
                : [...role.permissions, perm],
            }
          : role
      )
    );
  };

  return (
    <PermissionMatrix
      roles={roles}
      permissions={permissions}
      onPermissionChange={handlePermissionChange}
    />
  );
};

export default Permissions;
