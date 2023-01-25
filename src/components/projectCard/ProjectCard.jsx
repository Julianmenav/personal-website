import React from "react";
import "./styles.css";

export default function ProjectCard({ name, picture, description, links }) {
  return (
    <div
      id="projectCard"
      style={{
        backgroundImage: `url(${picture})`,
      }}
      className="relative bg-cover bg-center w-[400px] shadow-xl overflow-hidden "
    >
      <div id="mask" className="" />
      <div id="details" className="z-50">
        <div className="h-full flex flex-col p-3 2xs:p-6">
          <p className="font-bold text-xl xs:text-2xl font-roboto">{name}</p>
          <div className="flex grow relative">
            <div className="w-[70%] pr-6 pt-3">
              <p className="font-worksans text-xs 2xs:text-sm xs:text-base">{description}</p>
            </div>
            <div
              id="linkButtons"
              className="absolute h-full transition-all duration-1000 -right-1/2 flex flex-col gap-6 justify-center items-center"
            >
              <a href={links[0]} target="_blank" className="">
                <button className="text-black w-24 py-1 bg-white rounded-full text-center border-2  hover:bg-transparent hover:text-white border-white">
                  <p className="text-xs xs:text-sm font-worksans">View code</p>
                </button>
              </a>
              {links[1] ? (
                <a href={links[1]} target="_blank">
                  <button className="text-black  w-24 py-1 bg-white rounded-full text-center border-2  hover:bg-transparent hover:text-white border-white">
                    <p className="text-xs xs:text-sm font-worksans">Try</p>
                  </button>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
