import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Damian</span>
      <ul className="list">
        <li className="listItem">
          <img src="http://www.w3bai.com/w3css/img_avatar3.png" alt="" className="avatar" />
        </li>
        <li className="listItem">Joh Doeå…</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
