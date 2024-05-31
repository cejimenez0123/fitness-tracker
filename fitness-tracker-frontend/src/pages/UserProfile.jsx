import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`/api/user?email=${user.email}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      {user && userData && (
        <div>
          <span>Welcome, {userData.fullName}</span>
          <div>
            <Link to="profile">Profile</Link>
          </div>
          <div>
            <Link to="setting">Settings</Link>
          </div>
          <div>
            <Link to="logout">Logout</Link>
          </div>
        </div>
      )}
      <Outlet context={{ user: userData }} />
    </div>
  );
};

export default UserProfile;
