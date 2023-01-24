import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import projectList from "../../assets/projectList.json";

export default function Portfolio() {
  return (
    <>
      <div className="container py-20 px-2 max-w-[430px] sm:max-w-[560px] lg:max-w-[900px] xl:max-w-[1300px] m-auto">
        <p className="text-[50px] font-roboto italic">PROJECTS</p>
        <p className="text-2xl xl:w-2/3 mt-4  font-worksans">
          Some of my projects done during my learning, you can find the rest on
          my github.
        </p>
        <div
          id="portfolio"
          className="flex flex-wrap gap-y-8 gap-x-6 mt-9 justify-center"
        >
          {projectList.map(project => {
            return (
              <ProjectCard
              picture={project.picture}
              name={project.name}
              description={project.description}
              links={project.links}
            />
            )
          })}
        </div>
      </div>
    </>
  );
}
