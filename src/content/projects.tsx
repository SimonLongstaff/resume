import {MdModeEdit} from "react-icons/md";
import {AiFillGithub} from "react-icons/ai";
import Card from "../components/Card";
import styled from "styled-components";
import ImageGallery from "../components/image-gallery";

const curatasImages: string[] = [
    './curatas/home.png',
    './curatas/Guidance.png',
    './curatas/Sequence.png',
    './curatas/sequence2.png',
    './curatas/results.png',
    './curatas/results 2.png',
];

const blueToothImages: string[] = [
    './curatas/bt-app.jpg',
];

const apiImages: string[] = [
    './api/api1.png',
    './api/api2.png',
];

function Projects() {
    return (
        <div>
            <div className="pt-16 flex content-start">
                <MdModeEdit className=" text-white text-2xl lg:text-5xl"/>
                <h1 className={"text-2xl lg:text-5xl font-semibold text-white pl-4"}>Projects</h1>
            </div>


            <ProjectsFlex>
                <Card className={"bg-gray-800 border-gray-700"}>
                    <ProjectFlex>
                        <div>
                            <ProjectHeader>
                                <h1 className={"text-left text-4xl font-bold text-white "}>
                                    <a href={"https://crane-electronics.com/products/torque-software/curatas-wrench-control/"}>Curatas</a>
                                </h1>
                                <h2 className={"font-semibold text-blue-300"}>A comprehensive suite of web applications
                                    for
                                    managing and tracking production data in
                                    factory settings.</h2>
                            </ProjectHeader>

                            <ul className={"list-disc list-inside text-white text-left p-4"}>
                                <li>A comprehensive suite of web applications including a Windows service, a single page
                                    application, and a REST API.
                                </li>
                                <li>Microservice architecture</li>
                                <li>Automated critical production information tracking in factory
                                    settings.
                                </li>
                                <li>Utilized C# and the .NET Framework, JavaScript / Typescript, REST API, and SQL
                                    relational databases.
                                </li>
                                <li>OpenAPI/Swagger Documentation</li>
                            </ul>
                        </div>

                        <ImageGallery images={curatasImages}/>
                    </ProjectFlex>
                </Card>

                <Card className={"bg-gray-800 border-gray-700"}>
                    <ReverseProjectFlex>
                        <div>
                            <ProjectHeader>
                                <h1 className={"text-left text-4xl font-bold text-white "}>
                                    Android Wrench Control
                                </h1>
                                <h2 className={"font-semibold text-blue-300"}>React Native application for interfacing
                                    with
                                    bluetooth enabled tools</h2>
                            </ProjectHeader>

                            <ul className={"list-disc list-inside text-white text-left p-4"}>
                                <li>Android application using React Native to establish Bluetooth
                                    connectivity with smart tools for efficient data recording and
                                    processing.
                                </li>
                                <li>Streamlined fieldwork, such as wheel replacements on heavy goods
                                    vehicles, by ensuring precise lug nut tightening according to
                                    specifications and generating PDF reports.
                                </li>
                                <li>Utilized JavaScript, SQLite, React Native, and Android
                                    development.
                                </li>
                            </ul>
                        </div>

                        <ImageGallery images={blueToothImages}/>
                    </ReverseProjectFlex>

                </Card>

                <Card className={"bg-gray-800 border-gray-700"}>
                    <ProjectFlex>
                        <div>
                            <ProjectHeader>
                                <h1 className={"text-left text-4xl font-bold text-white "}>
                                    Nest.js REST API
                                </h1>
                                <h2 className={"font-semibold text-blue-300"}>Open Source Backend Project to show my
                                    coding
                                    style and practices</h2>
                                <h2>
                                    <AiFillGithub className={"inline-block text-white mr-2"}/>
                                    <a href={"https://github.com/SimonLongstaff/Node.js-Users-Api"}>View on Github</a>
                                </h2>

                            </ProjectHeader>

                            <ul className={"list-disc list-inside text-white text-left p-4"}>
                                <li>Node.js REST API for a web application that allows users to
                                    create,
                                    read, update, and delete data.
                                </li>
                                <li> Fully Documented with OpenAPI</li>
                                <li> Authenticated users with JSON Web Tokens (JWT)
                                </li>
                                <li>Fully tested with Jest and Supertest. CI/CD with GitHub Actions.
                                </li>
                                <li>Utilized TypeScript, Node.js, Nest.js, and PostgreSQL.
                                </li>
                            </ul>
                        </div>

                        <ImageGallery images={apiImages}/>
                    </ProjectFlex>

                </Card>
            </ProjectsFlex>
        </div>
    )
}

const ProjectsFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  & > div {
    margin: 20px;
  }

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


`

const ProjectFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 20px;

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ReverseProjectFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: start;
  gap: 20px;

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


const ProjectHeader = styled.div`
  margin-left: 15px;
  margin-top: 10px;

  @media (max-width: 1080px) {
    margin: 10px 15px;
  }

`;


export default Projects
