import React from 'react';
import './App.css';
import Profile from './content/profile';
import WorkExperience from "./content/work-experience";
import Projects from "./content/projects";
import Education from "./content/education";
import Navbar from "./components/navbar";
import HeroBanner from "./content/hero";
import styled from "styled-components";
import ExtraCircular from "./content/extra-circular";

const GetCurrentYear = () => {
    return new Date().getFullYear();
}

const AnimatedBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-size: 300% 300%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: linear-gradient(-45deg,
  rgba(10, 42, 68, 1) 0%,
  rgba(16, 81, 101, 1) 25%,
  rgba(25, 21, 84, 1) 51%,
  rgba(33, 5, 44, 1) 100%);
  -webkit-animation: AnimateBG 20s ease infinite;
  animation: AnimateBG 20s ease infinite;

  @-webkit-keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

function App() {
    return (
        <div>
            <AnimatedBackground/>
            <Navbar/>
            <a id={"home"}/>
            <HeroBanner/>
            <div className={"flex-col p-2 justify-center m-10"}>
                <a id={"profile"}/>
                <Profile/>
                <a id={"education"}/>
                <Education/>
                <a id={"work-experience"}/>
                <WorkExperience/>
                <a id={"projects"}/>
                <Projects/>
                <a id={"extra-circular"}/>
                <ExtraCircular/>
            </div>
            <div className={"flex justify-center pb-4"}>
                <div className={"text-center text-gray-500 text-xs"}>
                    <p>© {GetCurrentYear()} Simon Longstaff</p>
                    <p>Powered by React</p>
                </div>
            </div>
        </div>
    );
}

export default App;
