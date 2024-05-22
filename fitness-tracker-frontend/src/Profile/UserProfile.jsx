import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          <span>Welcome, {user.name}</span>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          <div>
            <Link to="/setting">Settings</Link>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/logout">Logout</Link>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
