"use client";

import Image from "next/image";
import React from "react";

const AboutMe = () => {
  const circleStyles: React.CSSProperties = {
    width: "400px",
    height: "400px",
    borderRadius: "100%",
    border: "10px solid #00d8ff",
    boxShadow: "0 0 30px 5px #00d8ff", // Adjust the glow effect
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // Clip the image to the circle shape
  };

  const imageStyles: React.CSSProperties = {
    marginBottom: " 100px",
    borderRadius: "10px", // Ensure the image is also circular
  };

  return (
    <div id="AboutMe" className="py-20 px-32">
      {/* Left Section */}
      <div>
        <div style={circleStyles}>
          <Image
            src="/profile-pic.png" // Path to your image with a transparent background
            alt="Your Image"
            width={350}
            height={350}
            style={imageStyles}
          />
        </div>
      </div>

      {/* Right Section */}
      <div></div>
    </div>
  );
};

export default AboutMe;
