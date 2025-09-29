import React from "react";
import heroImage from "../image.jpg";  // <-- correct extension

function Hero() {
  return (
    <div className="hero">
      <img
        src={heroImage}
        alt="Hero Banner"
        className="hero-img"
      />
    </div>
  );
}

export default Hero;
