import React from "react";
import installNode from "../assets/portfolio/installNode.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import pic1 from "../assets/portfolio/p1.png"
import pic2 from "../assets/portfolio/p2.png"
import pic3 from "../assets/portfolio/p3.png"
import pic4 from "../assets/portfolio/p4.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pic1,
      name:"Taaza Kitchen",
      demoUrl:"https://sid-taaza-kitchen.netlify.app/",
      codeUrl:"https://github.com/imsidharthsurya/food-ordering-app"
    },
    {
      id: 2,
      src: pic2,
      name:"My Youtube",
      demoUrl:"https://github.com/imsidharthsurya/youtube-app",
      codeUrl:"https://github.com/imsidharthsurya/youtube-app"
    },
    {
      id: 3,
      src: pic3,
      name:"Flash The Movie Bot",
      demoUrl:"https://www.loom.com/share/780ef0e968f34ab29968624fad7bfeaa",
      codeUrl:"https://www.loom.com/share/780ef0e968f34ab29968624fad7bfeaa"
    },
    {
      id: 4,
      src: pic4,
      name:"Microsoft 365 Plugin",
      demoUrl:"https://www.site24x7.com/community/microsoft-365-subscription-license-plugin",
      codeUrl:"https://github.com/site24x7/plugins/tree/master/Microsoft365ProductsSubscriptionLicenseCheck"
    },
    {
      id: 5,
      src: installNode,
      name:"My Youtube",
      demoUrl:"https://github.com/imsidharthsurya/youtube-app",
      codeUrl:"https://github.com/imsidharthsurya/youtube-app"
    },
    {
      id: 6,
      src: reactWeather,
      name:"My Youtube",
      demoUrl:"https://github.com/imsidharthsurya/youtube-app",
      codeUrl:"https://github.com/imsidharthsurya/youtube-app"
    },
  ];

  return (
    <div
      name="portfolio"
      className="pt-40 md:pt-0 md:pb-28 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,name,demoUrl,codeUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-center text-lg font-bold mt-5">{name}</p>
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(demoUrl, '_blank')} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => window.open(codeUrl, '_blank')} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
