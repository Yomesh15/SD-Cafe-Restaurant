import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">SD Cafe</div>

        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="menu" onClick={() => setOpen(false)}>Menu</a></li>
          <li><a href="about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

        <div className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
