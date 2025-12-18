import React from "react";
import heroImage from "../assets/hero.jpg";
// import coffeeVideo from "../assets/coffee.mp4";

const Hero = () => {
  return (
    <section className="hero-split">
      {/* LEFT: Content */}
      <div className="hero-content">
        <span className="hero-tag">Since 2024</span>

        <h1>
          Welcome to <span>SD Cafe</span>
        </h1>

        <p>
          Brewing happiness with fresh coffee, delicious food,
          and cozy vibes every day.
        </p>

        <div className="hero-buttons">
          <a href="menu" className="hero-btn primary">
            View Menu
          </a>
          <a href="location" className="hero-btn secondary">
            Visit Us
          </a>
        </div>
      </div>

      {/* RIGHT: Video / Image */}
      <div
        className="hero-media"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* <source src={coffeeVideo} type="video/mp4" /> */}
        </video>

        <div className="hero-media-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
