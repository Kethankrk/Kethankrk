import React, { useEffect, useState } from "react";
import ItemList from "../data/AboutData";
import ItemCard from "./ItemCard";

export default function About() {
  const [currentTab, setCurrentTab] = useState("skill");

  const changeState = (name) => {
    setCurrentTab(name);
  };

  return (
    <div id="about" className="flex flex-col items-center md:flex-row gap-14 md:items-center max-w-[1000px] mx-auto">
      <div className="w-2/3 sm:w-2/3  md:1/4 lg:w-1/3 rounded-xl bg-base-100 h-full">
        <img src="programmer.png" alt="portrait" className="rounded-xl" />
      </div>
      <div className="w-full sm:w-2/3 md:3/4 lg:w-2/3">
        <h2 className="text-4xl font-semibold pb-4 text-center md:text-start">About Me</h2>
        <p className="font-light text-sm text-justify">
          I'm a young programmer who embarked on my coding journey at the age of
          16. I initially delved into web development, mastering technologies
          like React and Tailwind CSS. With a solid foundation in JavaScript, I
          expanded my horizons by diving into the world of mobile app
          development and exploring tools such as React Native and Flutter for
          Android app creation. My academic pursuits introduced me to the realm
          of C programming, which I embraced during my bachelor's studies. My
          project portfolio reflects my diverse skill set. I've explored a wide
          range of programming domains. As of now, my focus lies on delving
          deeper into the realms of Golang and Rust, further enriching my
          programming toolkit.
        </p>
        <div className="flex gap-14 pt-5 pb-5">
          <p
            className={`anim relative cursor-pointer ${currentTab == "skill" && "live"}`}
            onClick={() => changeState("skill")}
          >
            Skill
          </p>
          <p
            className={`anim relative cursor-pointer ${currentTab == "experience" && "live"}`}
            onClick={() => changeState("experience")}
          >
            Experience
          </p>
          <p
            className={`anim relative cursor-pointer ${currentTab == "education" && "live"}`}
            onClick={() => changeState("education")}
          >
            Education
          </p>
        </div>
        <div className="flex gap-10">
          {ItemList[currentTab].map((item) => {
            return <ItemCard title={item.title} list={item.list} />;
          })}
        </div>
      </div>
    </div>
  );
}
