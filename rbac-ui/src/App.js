import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Home from "./pages/Home";
import Permissions from "./pages/Permissions";
import AddUser from "./pages/Add-user";
import EditUser from "./pages/EditUser";

const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/users">Users</Link> | <Link to="/roles">Roles</Link> |{" "}
        <Link to="/permissions">Permissions</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:userId" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;
