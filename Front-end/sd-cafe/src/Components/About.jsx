import React from "react";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About SD Cafe" />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2>About SD Cafe</h2>
          <p>
            SD Cafe is your cozy corner for delicious meals and warm drinks.
            Our mission is to serve fresh, high-quality food in a friendly
            environment. We believe every meal should be an experience!
          </p>
          <p>
            Whether you’re stopping by for a quick coffee or enjoying a full
            meal with friends and family, SD Cafe is the place to be.
          </p>

          <p>
            SD Cafe is a shop in Jaipur, located at Mangyawas. We offer you swadeshi food made using Indian ingredients.          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
