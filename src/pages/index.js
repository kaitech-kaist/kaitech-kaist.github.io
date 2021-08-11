import * as React from "react";
import "../styles/global.css";
import ContactScreen from "./ContactScreen";

import GuideIcon from "../images/guide.png";
import KaitalksIcon from "../images/kaitalks.png";

import Kaist1icon from "../images/kaist1.jpg";
import Kaist2icon from "../images/kaist2.jpg";
import Kaist3icon from "../images/kaist3.jpg";
import KaistNew from "../images/kaist_new.png";

import People from '../assets/People.svg';

const Projects = [
  {
    title: "Kaitech Guide",
    src: GuideIcon,
  },
  {
    title: "KaiTalks",
    src: KaitalksIcon,
  },
];

const HeaderScreen = () => {
  return (
    <header className="2xl:py-6 container mx-auto">
      <div className="flex 2xl:h-10">
        <div className="mr-auto 2xl:text-2xl font-redhatdisplay text-white">
          <p>KaiTech</p>
        </div>
        <div className="flex 2xl:space-x-14 2xl:text-base font-roboto text-gray-300">
          <p>Home</p>
          <p>About Us</p>
          <p>Events</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
    </header>
  );
};
/// TODO half -> norm
const MainContentScreen = () => {
  return (
    <div>
      <div className="main-content flex h-screen mt-5">
        <div className="relative h-auto 2xl:w-1/3 mx-auto"></div>
        <div className="relative flex-row justify-center items-center h-96 2xl:w-2/3 text-white">
          <div className="relative top-1/2">
          <p className="2xl:text-ultra font-roboto">
            Kaitech
          </p>
          <p className="2xl:text-5xl">
            KAIST Computer Science community
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutScreen = () => {
  return (
    <div className="2xl:h-screen 2xl:flex justify-center items-center">
      <div className="w-1/2 h-full">

      </div>
      <div className="w-1/2 h-full">
        <div className="relative top-1/3">
        <People className="m-auto"/>
        <p className="font-roboto 2xl:text-6xl m-auto leading-none text-white">
          About Us
        </p>
        <p className="text-gradient">We are a group of tech enthusiasts.</p>
        </div>
      </div>
    </div>
  );
};

const ProjectsScreen = () => {
  const renderedProject = Projects.map((x) => (
    <div className="xl:w-1/3 xl:h-auto xl:space-y-6">
      <p className="xl:font-montserrat xl:font-bold text-center xl:text-3xl xl:italic">
        {x.title}
      </p>
      <img
        className="transform mx-auto xl:rounded-2xl border-gray-400 border-2"
        src={x.src}
        alt=""
      />
    </div>
  ));
  return (
    <div className="h-auto xl:mt-10">
      <p className="font-montserrat font-extrabold text-center xl:text-4xl">
        Work
      </p>

      <div className="flex flex-wrap justify-center xl:mt-5 items-center xl:space-x-8">
        {renderedProject}
      </div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <main>
      <div className="bg-primary min-h-screen mb-20">
        <HeaderScreen />
        <div>
          <MainContentScreen />
          <AboutScreen />
          <ProjectsScreen />
          <ContactScreen />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
