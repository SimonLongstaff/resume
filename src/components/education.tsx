import {MdSchool} from "react-icons/md";

function Education() {
    return (
        <div>
            <div className="pl-10 pt-5 flex content-start ">
                <MdSchool className=" dark:text-white text-2xl"/>
                <h1 className={"text-2xl font-semibold text-gray-800 dark:text-white pl-4"}>Education</h1>
            </div>
            <div
                className="m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="px-6 py-4 ">
                    <div className="text-start flex justify-between">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">University of
                            Birmingham</h2>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">2020</h2>
                    </div>
                    <div className="text-start flex justify-between">
                        <h2 className="text-1xl text-start font-semibold text-gray-800 dark:text-white">MSc Computer
                            Science</h2>
                        <h2 className="text-1xl text-start font-semibold text-gray-800 dark:text-white">2:1</h2>
                    </div>
                </div>
            </div>
            <div
                className="m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="px-6 py-4 ">
                    <div className="text-start flex justify-between">
                        <h2 className="text-2xl pr-2 font-semibold text-gray-800 dark:text-white">University of
                            Bristol</h2>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">2019</h2>
                    </div>
                    <div className="text-start flex justify-between">
                        <h2 className="text-1xl text-start font-semibold text-gray-800 dark:text-white">BSc
                            Neuroscience</h2>
                        <h2 className="text-1xl text-start font-semibold text-gray-800 dark:text-white">2:2</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Education
