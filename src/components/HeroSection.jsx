import React from "react";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center text-center md:text-start"
    >
      <div className="w-full md:w-1/2">
        <p className="pb-5">Backend Developer</p>
        <h1 className="text-6xl">
          Hi, I'm <span className="text-primary">Kethan</span>
        </h1>
        <h1 className="text-6xl">Krishna PK from India</h1>
      </div>
      <div className="w-1/2 hidden md:flex justify-center items-center">
        <img className="w-[200px]" src="hero.webp" alt="" />
      </div>
    </div>
  );
}
