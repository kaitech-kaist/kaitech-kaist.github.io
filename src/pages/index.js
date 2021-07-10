import * as React from "react";
import "../styles/global.css";
import ContactScreen from "./ContactScreen";

import GuideIcon from '../images/guide.png';
import KaitalksIcon from '../images/kaitalks.png';

import Kaist1icon from '../images/kaist1.jpg';
import Kaist2icon from '../images/kaist2.jpg';
import Kaist3icon from '../images/kaist3.jpg'; 

const Projects = [
  {
    title: 'Kaitech Guide',
    src: GuideIcon,
  },
  {
    title: "KaiTalks",
    src: KaitalksIcon,
  },
];



const HeaderScreen = () => {
  return (
    <header className="py-4 container mx-auto lg:max-width-768px">
      <div className="flex justify-end items-center h-12">
        <div className="flex space-x-24 font-semibold xl:text-3xl 2xl:text-4xl lg:text-xl" >
          <p>
            About
          </p>
          <p>
            Work
          </p>
          <p>
            Contacts
          </p>
        </div>
      </div>
    </header>
  );
}
/// TODO half -> norm
const MainContentScreen = () => {
  return (
    <div className="main-content flex h-auto mt-5">
      <div className="h-96 w-1/2 mx-auto flex items-center justify-center flex-col">
        <p className="font-redhatdisplay font-extrabold 2xl:text-8xl xl:text-8xl">
          Kaitech
        </p>
        <p className="font-redhatdisplay font-extrabold 2xl:text-5xl xl:text-5xl">
          KAIST Tech Community
        </p>
      </div>
      <div className="relative h-96 w-1/2">
        <img className="absolute  2xl:left-10 top-0 xl:left-10 transform xl:h-36 2xl:scale-50 xl:rounded-2xl" src={Kaist1icon} alt="" />
        <img className="absolute  xl:bottom-16 2xl:left-20 xl:left-5  transform xl:h-32 2xl:scale-75 xl:rounded-2xl" src={Kaist2icon} alt="" />
        <img className="absolute  2xl:right-32 2xl:top-7 xl:right-28 xl:top-7 xl:h-56 2xl:scale-100 xl:rounded-2xl" src={Kaist3icon} alt="" />
      </div>
    </div>
  );
}

const AboutScreen = () => {
  return (
    <div className="h-auto flex justify-center items-center">
      <div>
        <p className="font-montserrat font-extrabold text-center xl:text-4xl">
          About
        </p>
        <p className="font-redhatdisplay xl:text-2xl xl:mt-4 text-center">
          We are a group of tech<br></br>enthusiasts.
        </p>
      </div>
    </div>
  );
}



const ProjectsScreen = () => {
  const renderedProject = Projects.map(x =>
  (
    <div className="xl:w-1/3 xl:h-auto xl:space-y-6">
      <p className="xl:font-montserrat xl:font-bold text-center xl:text-3xl xl:italic">
        {x.title}
      </p>
      <img className="transform mx-auto xl:rounded-2xl border-gray-400 border-2" src={x.src} alt="" />
    </div>
  )
  );
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
}



const IndexPage = () => {
  return (
    <main>
      <div className="min-h-screen mb-20">
        <HeaderScreen />
        <div>
          <MainContentScreen />
          <AboutScreen />
          <ProjectsScreen />
          <ContactScreen />
        </div>
      </div>
    </main>
  )
}

export default IndexPage
