import React from 'react';
import './App.css';
import Profile from './components/profile';
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Project";
import Education from "./components/education";

const GetCurrentYear = () => {
    return new Date().getFullYear();
}

function App() {
    return (
        <div className="bg-blue-100 dark:bg-gray-900 min-h-screen ">
            <div className={"AppFlex p-2 "}>
                <div className={"sidebar"}>
                    <Profile/>
                    <Education/>
                </div>
                <div className={"main"}>
                    <WorkExperience/>
                    <Projects/>
                </div>
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
