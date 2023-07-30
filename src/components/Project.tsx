import {MdModeEdit} from "react-icons/md";
import ImageFull from "./Image";

function Projects() {
    return (
        <div>
            <div className="pl-10 pt-5 flex content-start ">
                <MdModeEdit className=" dark:text-white text-2xl lg:text-5xl"/>
                <h1 className={"text-2xl lg:text-5xl font-semibold text-gray-800 dark:text-white pl-4"}>Projects</h1>
            </div>
            <div
                className="m-10 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h1 className={"text-left text-4xl font-bold text-gray-800 dark:text-white "}>
                    <a href={"https://crane-electronics.com/products/torque-software/curatas-wrench-control/"}>Curatas</a>
                </h1>

                <ul className={"list-disc list-inside  dark:text-white text-left p-4"}>
                    <li className={"p-1"}>Comprehensive suite of web applications including a windows service, a
                        single page application, and a REST API.
                    </li>
                    <li className={"p-1"}>Automated critical production information tracking in factory settings.
                    </li>
                    <li className={"p-1"}>Remote Database Apis optimized to be highly saleable, with hundreds of clients
                        pushing
                        thousands of data points every day
                    </li>
                    <li className={"p-1"}>Engineered solutions utilizing C#, .NET, JavaScript with a REST API
                        architecture using both a local SQLite database and an optional SQL Server for synchronization
                        of multiple stations.
                    </li>
                </ul>

                <div className={"flex flex-row justify-between flex-nowrap  m-2 phoneWrap"}>
                    <div className={"flex flex-wrap m-2"}>
                        <ImageFull src={"./curatas/home.png"}
                                   alt={"Curatas Home"} className={""}/>
                        <div>
                            <h2 className={"text-center text-1xl font-semibold text-gray-800 dark:text-white flex justify-between items-center "}>
                                Home Screen
                            </h2>
                            <p className={"text-left text-gray-800 dark:text-white text-sm "}>
                                The home page of the Curatas single page application. The application is designed to be
                                used
                                on
                                a tablet in a factory setting, and is optimized for touch input.
                            </p>
                        </div>
                    </div>

                    <div className={"flex flex-wrap m-2"}>
                        <ImageFull src={"./curatas/Guidance.png"}
                                   alt={"Curatas Guidance"} className={""}/>
                        <div>
                            <h2 className={"text-center text-1xl font-semibold text-gray-800 dark:text-white flex justify-between items-center "}>
                                Guidance Screen
                            </h2>
                            <p className={"text-left text-gray-800 dark:text-white text-sm "}>
                                The guidance screen of the Curatas single page application. The application is designed
                                to
                                be
                                used with a connected smart tool, and provides the user with real time feedback on the
                                tightening process.
                            </p>
                        </div>
                    </div>

                    <div className={"flex flex-wrap  m-2"}>
                        <ImageFull src={"./curatas/results.png"}
                                   alt={"Curatas Results Overview"} className={""}/>
                        <div>
                            <h2 className={"text-center text-1xl font-semibold text-gray-800 dark:text-white flex justify-between items-center "}>
                                Results Overview
                            </h2>
                            <p className={"text-left text-gray-800 dark:text-white text-sm "}>
                                The results overview screen of the Curatas single page application. This screen provides
                                results per installation, and allows the user to drill down into the results of each
                                installation.
                            </p>
                        </div>
                    </div>

                    <div className={"flex flex-wrap  m-2"}>
                        <ImageFull src={"./curatas/results 2.png"}
                                   alt={"Curatas Results"} className={""}/>
                        <div>
                            <h2 className={"text-center text-1xl font-semibold text-gray-800 dark:text-white flex justify-between items-center "}>
                                Results Details
                            </h2>
                            <p className={"text-left text-gray-800 dark:text-white text-sm "}>
                                The results details screen of the Curatas single page application. This screen provides
                                detailed results per installation, and allows the user to drill down into the results.
                            </p>
                        </div>
                    </div>

                    <div className={"flex flex-wrap  m-2"}>
                        <ImageFull src={"./curatas/Sequence.png"}
                                   alt={"Curatas Sequence Edit 1"} className={""}/>
                        <div>
                            <h2 className={"text-center text-1xl font-semibold text-gray-800 dark:text-white flex justify-between items-center "}>
                                Sequence Editing
                            </h2>
                            <p className={"text-left text-gray-800 dark:text-white text-sm "}>
                                The sequence editing screen of the Curatas single page application. This screen allows
                                the user to edit the details of a tightening sequence. Including tightening steps but
                                also
                                quality control steps.
                            </p>
                        </div>
                    </div>

                    <div className={"flex flex-wrap  m-2"}>
                        <ImageFull src={"./curatas/Sequence2.png"}
                                   alt={"Curatas Sequence Edit 2"} className={""}/>
                        <div>
                            <h2 className={"text-center text-1xl font-semibold text-gray-800 dark:text-white flex justify-between items-center "}>
                                Sequence Editing
                            </h2>
                            <p className={"text-left text-gray-800 dark:text-white text-sm "}>
                                The sequence editing screen also allows the user to edit the tightening sequence and
                                create
                                a visual representation of the tightening sequence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="m-10 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h1 className={"text-left text-4xl font-bold text-gray-800 dark:text-white "}>
                    Android Wrench Control
                </h1>

                <ul className={"list-disc list-inside  dark:text-white text-left p-4"}>
                    <li className={"p-1"}>Android application using React Native to establish Bluetooth
                        connectivity with smart tools for efficient data recording and
                        processing.
                    </li>
                    <li className={"p-1"}>Streamlined fieldwork, such as wheel replacements on heavy goods
                        vehicles, by ensuring precise lug nut tightening according to
                        specifications and generating PDF reports.
                    </li>
                    <li className={"p-1"}>Utilized JavaScript, SQLite, React Native, and Android development.
                    </li>
                </ul>

                <div className={"flex flex-row justify-between flex-nowrap  m-2 phoneWrap"}>
                    <div className={"flex flex-wrap flex-col m-2"}>
                        <ImageFull src={"./curatas/bt-app.jpg"}
                                   alt={"bt-app-1"} className={" max-h-72"}/>
                        <div>
                            <h2 className={"text-center text-1xl font-semibold text-gray-800 dark:text-white flex justify-between items-center "}>
                                Home Screen
                            </h2>
                            <p className={"text-left text-gray-800 dark:text-white text-sm "}>
                                The home screen of the Android Wrench Control application. The application lets the user
                                set up a connection with a smart tool, and then allows the user to start a tightening
                                process based on the set parameters.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div
                className="m-10 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <h1 className={"text-left text-4xl font-bold text-gray-800 dark:text-white "}>
                    <a href={"https://github.com/SimonLongstaff/Node.js-Users-Api"}>Node.js Rest
                        API</a>
                </h1>

                <ul className={"list-disc list-inside  dark:text-white text-left p-4"}>
                    <li className={"p-1"}>Node.js REST API for a web application that allows users to create,
                        read, update, and delete data.
                    </li>
                    <li className={"p-1"}> Authenticated users with JSON Web Tokens (JWT)
                    </li>
                    <li className={"p-1"}>Fully tested with Jest and Supertest. CI/CD with GitHub Actions.
                    </li>
                    <li className={"p-1"}>Utilized TypeScript, Node.js, Nest.js, and PostgreSQL.
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Projects
