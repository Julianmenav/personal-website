import { useEffect, useState } from "react";
import "./App.css";
import ProjectCard from "./components/projectCard/ProjectCard";

function App() {
  return (
    <div className="App ">
      <div className="container py-20 px-2 max-w-[430px] sm:max-w-[560px] lg:max-w-[900px] xl:max-w-[1300px] m-auto">
        <p className="text-[50px] font-roboto italic">PROJECTS</p>
        <p className="text-2xl xl:w-2/3 mt-4  font-worksans">
          Some of my projects done during my learning, you can find the
          rest on my github.
        </p>
        <div id="portfolio" className="flex flex-wrap gap-y-8 gap-x-6 mt-9 justify-center">
          <ProjectCard
            picture="/img/twitterAppCapture.png"
            name="Twitter Bot Downloader"
            description="Web App that makes easy to download videos from the social network Twitter. It uses the twitter official API"
            links={[
              "https://github.com/Julianmenav/twitter-video-downloader",
              "https://julianmenav.github.io/twitter-video-downloader/",
            ]}
          />
          <ProjectCard
            picture="/img/twitterAppCapture.png"
            name="Twitter Bot Downloader"
            description="Web App that makes easy to download videos from the social network Twitter. It uses the twitter official API"
            links={[
              "https://github.com/Julianmenav/twitter-video-downloader",
              "https://julianmenav.github.io/twitter-video-downloader/",
            ]}
          />
          <ProjectCard
            picture="/img/twitterAppCapture.png"
            name="Twitter Bot Downloader"
            description="Web App that makes easy to download videos from the social network Twitter. It uses the twitter official API"
            links={[
              "https://github.com/Julianmenav/twitter-video-downloader",
              "https://julianmenav.github.io/twitter-video-downloader/",
            ]}
          />
          <ProjectCard
            picture="/img/twitterAppCapture.png"
            name="Twitter Bot Downloader"
            description="Web App that makes easy to download videos from the social network Twitter. It uses the twitter official API"
            links={[
              "https://github.com/Julianmenav/twitter-video-downloader",
              "https://julianmenav.github.io/twitter-video-downloader/",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
