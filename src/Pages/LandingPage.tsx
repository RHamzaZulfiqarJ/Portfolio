"use client";

import React from "react";
import TypeWriter from "typewriter-effect";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

const LandingPage = () => {
  const circleStyles: React.CSSProperties = {
    width: "400px",
    height: "400px",
    backgroundColor: "#00d8ff", // Blue color, you can change it
    borderRadius: "100%",
    boxShadow: "0 0 30px 20px rgba(52, 152, 219, 0.7)", // Adjust the glow effect
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // Clip the image to the circle shape
  };

  const imageStyles: React.CSSProperties = {
    marginBottom: " 100px",
    borderRadius: "10px", // Ensure the image is also circular
  };

  const handleDownload = () => {
    const cvUrl = "/Resume.pdf"; // Path to your CV file in the public directory
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "resume.pdf"; // Specify the desired file name
    link.click();
  };

  return (
    <div className="py-20 px-32">
      <div className="flex items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-extrabold text-white tracking-wide">Hello! It's Me</div>
          <div className="text-6xl font-extrabold text-white tracking-wide">Hamza Zulfiqar</div>
          <div className="text-3xl font-extrabold text-white tracking-wide flex items-center">
            And I am{" "}
            <span className="text-[#00d8ff] ml-2">
              <TypeWriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Backend Developer",
                    "MERN Stack Developer",
                    "Video Editor",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="text-lg text-white font-normal mt-4 w-3/4">
            "Passionate web developer with expertise in front-end and back-end technologies,
            dedicated to creating seamless, user-centric digital experiences through innovative and
            efficient solutions"
          </div>
          <div className="flex items-center gap-8 mt-4">
            <a
              href="https://twitter.com/HamzaZu57284516"
              className="p-3 rounded-full cursor-pointer hover:border-[#00d8ff] border-transparent transition-all duration-500 border-2 hover:border-2">
              <FaTwitter className="text-[25px] text-[#00d8ff]" />
            </a>
            <a
              href="https://www.facebook.com/hamza.zulfiqar.75286"
              className="p-3 rounded-full cursor-pointer hover:border-[#00d8ff] border-transparent transition-all duration-500 border-2 hover:border-2">
              <FaFacebook className="text-[25px] text-[#00d8ff]" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-zulfiqar-081359262"
              className="p-3 rounded-full cursor-pointer hover:border-[#00d8ff] border-transparent transition-all duration-500 border-2 hover:border-2">
              <FaLinkedin className="text-[25px] text-[#00d8ff]" />
            </a>
            <a
              href="https://github.com/RHamzaZulfiqarJ"
              className="p-3 rounded-full cursor-pointer hover:border-[#00d8ff] border-transparent transition-all duration-500 border-2 hover:border-2">
              <FaGithub className="text-[25px] text-[#00d8ff]" />
            </a>
          </div>
          <div>
            <button
              onClick={handleDownload}
              className="bg-[#00d8ff] text-white font-bold text-lg px-8 py-2 rounded-full mt-8 hover:bg-transparent hover:text-[#00d8ff] transition-all duration-500 border-2 border-[#00d8ff]">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div style={circleStyles}>
            <Image
              src="/profile-pic.png"
              alt="Your Image"
              width={350}
              height={350}
              style={imageStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
