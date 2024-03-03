import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png"
import docker from "../assets/docker.png"
import cpp from "../assets/c++.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
import expressjs from "../assets/expressjs.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 4,
      src: expressjs,
      title: "Express JS",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="tech stack"
      className="pt-[700px] md:pt-72 pb-20 md:pb-0 bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
