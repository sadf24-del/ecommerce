// ProfileDropdown.js
import React, { useState } from 'react';
import './index.css'; 

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="profile-dropdown ms-2">
      <img
        src="/profile-icon.png"
        alt="Profile"
        className="profile-icon"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
