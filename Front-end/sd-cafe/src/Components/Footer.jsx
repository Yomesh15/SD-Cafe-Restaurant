import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>SD Cafe</h3>
        <p>Contact us:</p>
        <p>Email: <a href="mailto:nothing@gmail.com">nothing@gmail.com</a></p>
        <p>Phone: <a href="tel:8955770391">8955770391</a></p>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} SD Cafe. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
