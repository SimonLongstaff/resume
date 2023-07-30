import '../App.css';
import {MdEmail, MdHome, MdWork} from 'react-icons/md';
import LanguageBar from "./languageBar";

function Profile() {
    return (
        <div>
            <div
                className="m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className={"relative"}>
                    <img className={"w-100"} src={"./profile.jpg"}/>
                    <h2 className="absolute top-0 p-2 rounded font-semibold text-3xl text-white  capitalize left-1.5">Simon
                        Longstaff</h2>
                </div>

                <div className=" py-5 ">
                    <div className=" px-6 flex justify-start items-center">
                        <MdWork className="dark:text-white text-2xl"/>
                        <h2 className=" pl-4 text-1xl font-semibold text-gray-800 dark:text-white">Software
                            Engineer</h2>
                    </div>
                    <div className=" px-6 flex justify-start items-center">
                        <MdHome className="dark:text-white text-2xl"/>
                        <h2 className=" pl-4 text-1xl font-semibold text-gray-800 dark:text-white">Nakano-ku, Tokyo</h2>
                    </div>
                    <div className=" px-6 flex justify-start items-center">
                        <MdEmail className="dark:text-white text-2xl"/>
                        <h2 className=" pl-4 text-1xl font-semibold text-gray-800 dark:text-white">
                            <a href="mailto:SimonLngstaff@gmail.com">
                                simonlngstaff@gmail.com
                            </a>
                        </h2>
                    </div>
                </div>

                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-70"/>

                <div className="px-6 py-4 ">
                    <LanguageBar language={"JavaScript"} percent={100} level={"Experienced"}/>
                    <LanguageBar language={"TypeScript"} percent={90} level={"Experienced"}/>
                    <LanguageBar language={"SQL"} percent={75} level={"Intermediate"}/>
                    <LanguageBar language={"C#"} percent={70} level={"Intermediate"}/>
                    <LanguageBar language={"Python"} percent={30} level={"Junior"}/>
                </div>

                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-70"/>

                <div className="px-6 py-4 ">
                    <LanguageBar language={"English"} percent={100} level={"Native"}/>
                    <LanguageBar language={"Japanese"} percent={10} level={"Beginner / N5"}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;

