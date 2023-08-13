import {MdDateRange, MdOutlineAlternateEmail, MdWorkHistory} from "react-icons/md";
import Card from "../components/Card";
import styled from "styled-components";

function WorkExperience() {
    return (
        <div>
            <div className="pt-16 flex content-start ">
                <MdWorkHistory className="text-white text-2xl lg:text-5xl"/>
                <h1 className={"text-2xl lg:text-5xl font-semibold text-white pl-4"}>Work
                    Experience</h1>
            </div>

            <WorkFlex>
                <Card className={"bg-gray-800 border-gray-700 p-5 "}>

                    <WorkInfoHeader>
                        <h1 className={"text-left text-4xl font-bold text-white flex justify-between items-center "}>
                            Software Engineer
                            <span
                                className={" text-2xl text-end rounded p-2 ml-2 text-blue-300 "}>2 Years, 6 Months</span>
                        </h1>
                        <h2 className={"text-left text-1xl font-semibold text-white "}>
                            <MdOutlineAlternateEmail className={"inline-block mr-2"}/>
                            <a href={"https://crane-electronics.com/"}>Crane Electronics</a></h2>
                        <h2 className={"text-left text-1xl font-semibold text-white items-center "}>
                            <MdDateRange className={"inline-block mr-2"}/>
                            <span>2021 - 2023</span>
                        </h2>
                    </WorkInfoHeader>
                    <ul className={"list-disc list-inside text-white text-left p-4"}>
                        <li>Collaborated as part of a small Agile development team, working
                            primarily on IoT devices and locally installed web apps utilized by
                            Toyota, Aston Martin, Norton Motorcycles, and other high-profile
                            clients.
                        </li>
                        <li>Design and develop software solutions across diverse platforms,
                            including mobile apps, responsive web apps, web APIs on embedded
                            hardware, and server/client software with data synchronization
                            functionality.
                        </li>
                        <li>Leveraged JavaScript, TypeScript, C#, and Python within frameworks
                            such as React and Microsoft .Net.
                        </li>
                        <li>Spearhead initiatives to modernize the production process, including
                            transitioning from SVN to Git, introducing Git-flow, and implementing
                            CI/CD processes.
                        </li>
                        <li>Advocate for the adoption of modern technologies such as TypeScript and
                            standardized unit testing methodologies
                        </li>
                    </ul>
                </Card>
            </WorkFlex>
        </div>
    );

}

const WorkFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  li {
    margin: 10px;
    text-align: left;

  }

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      margin: 5px 0;
    }
  }

`;

const WorkInfoHeader = styled.div`
  margin-left: 15px;

`;


export default WorkExperience;
