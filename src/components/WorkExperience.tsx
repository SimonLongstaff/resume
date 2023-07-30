import {MdWorkHistory} from "react-icons/md";

function WorkExperience() {
    return (
        <div>
            <div className="pl-10 pt-5 flex content-start ">
                <MdWorkHistory className=" dark:text-white text-2xl lg:text-5xl"/>
                <h1 className={"text-2xl lg:text-5xl font-semibold text-gray-800 dark:text-white pl-4"}>Work
                    Experience</h1>
            </div>

            <div
                className={" m-10 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"}>

                <h1 className={"text-left text-4xl font-bold text-gray-800 dark:text-white flex justify-between items-center "}>
                    Software Engineer
                    <span
                        className={"text-base rounded p-2 ml-2 text-blue-600 bg-blue-200"}>2 Years, 8 Months</span>
                </h1>
                <h2 className={"text-left text-1xl font-semibold text-gray-800 dark:text-white "}>
                    <a href={"https://crane-electronics.com/"}>Crane Electronics</a></h2>
                <h2 className={"text-left text-1xl font-semibold text-gray-800 dark:text-white flex justify-between items-center "}>
                    <span>2021 - 2023</span>

                </h2>
                <ul className={"list-disc list-inside dark:text-white text-left p-4"}>
                    <li className={"p-1"}>Collaborated as part of a small Agile development team, working on
                        applications utilized by Toyota, Aston Martin, Norton Motorcycles, and
                        other high-profile clients.
                    </li>
                    <li className={"p-1"}>Design and develop software solutions across diverse platforms,
                        including mobile apps, responsive web apps, web APIs on embedded
                        hardware, and server/client software with data synchronization
                        functionality.
                    </li>
                    <li className={"p-1"}>Leveraged JavaScript, TypeScript, C#, and Python within frameworks
                        such as React and Microsoft .Net.
                    </li>
                    <li className={"p-1"}>Spearhead initiatives to modernize the production process, including
                        transitioning from SVN to Git, introducing Git-flow, and implementing
                        CI/CD processes.
                    </li>
                    <li className={"p-1"}>Advocate for the adoption of modern technologies such as TypeScript and
                        standardized unit testing methodologies
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default WorkExperience;
