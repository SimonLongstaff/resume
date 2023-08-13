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
import AnimatedBackground from "./components/animated-background";

const GetCurrentYear = () => {
    return new Date().getFullYear();
}

const AnimatedBackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-size: 300% 300%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: linear-gradient(-45deg,
  rgb(218, 201, 118) 0%,
  rgb(24, 110, 136) 25%,
  rgb(45, 39, 150) 51%,
  rgb(132, 106, 211) 100%);
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
            <AnimatedBackgroundContainer>
                <AnimatedBackground/>
            </AnimatedBackgroundContainer>
            <Navbar/>
            <a id={"home"}/>
            <HeroBanner/>
            <div className={"flex justify-items-center justify-center"}>
                <div className={"flex-col p-2 justify-center justify-items-center m-10 max-w-screen-2xl"}>
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
            </div>
            <div className={"flex justify-center pb-4"}>
                <div className={"text-center text-gray-200 text-xs"}>
                    <p>© {GetCurrentYear()} Simon Longstaff</p>
                    <p>Powered by React</p>
                </div>
            </div>
        </div>
    );
}

export default App;
