import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contactdata, setcontactdata] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://10.60.78.67:2006/api/contact", contactdata);
      alert(response.data.msg);
      setcontactdata({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.msg || "Something went wrong!");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch :)</h3>
          <p>📍 Address: Mangyawas Road, Near Chopra Marriage Garden, Jaipur</p>
          <p>📞 Phone: +91 8955770391</p>
          <p className="em">✉ Email: info@sdcafe.com</p>
          <a href="https://wa.me/918955770391" target="_blank" rel="noreferrer" className="whatsapp-btn">
            💬 Chat on WhatsApp 💬
          </a>
        </div>

        <div className="contact-map">
          <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1170&auto=format&fit=crop" alt="" />
        </div>

        <div className="contact-form">
          <h3>Send Us a Inquiry</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              name="name"
              value={contactdata.name}
              onChange={(e) => setcontactdata({ ...contactdata, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              name="email"
              value={contactdata.email}
              onChange={(e) => setcontactdata({ ...contactdata, email: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              name="message"
              value={contactdata.message}
              onChange={(e) => setcontactdata({ ...contactdata, message: e.target.value })}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
