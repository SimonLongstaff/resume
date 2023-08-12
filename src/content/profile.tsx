import '../App.css';
import {MdEmail, MdHome, MdWork} from 'react-icons/md';
import LanguageBar from "../components/languageBar";
import styled from "styled-components";
import Card from "../components/Card";

const ProfileFlex = styled.div`
  display: flex;
  justify-content: start;
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const HeadShot = styled.img`
  height: fit-content;
  max-height: 65vh;

  @media (max-width: 1080px) {
    max-height: 100vh;
  }
`;

const ProfileInfo = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  padding: 20px;
  margin: 0 10px 30px 10px;
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    padding: 5px;
  }
`;

const ProfileSkills = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 100%;
  }
`;

const ProfileDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  margin-top: 20px;
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    margin: 5px;
  }
`;


function Profile() {
    return (

        <Card className={"bg-gray-800 border-gray-700"}>
            <ProfileFlex>
                <div>
                    <HeadShot src={"./profile.jpg"} alt={"profile-image"}/>
                </div>


                <ProfileInfo>
                    <div>
                        <div>
                            <h1 className=" text-4xl font-semibold text-white">Simon
                                Longstaff</h1>
                        </div>
                        <div className="py-2">
                            <div className=" flex justify-start items-center">
                                <MdWork className="text-white text-2xl"/>
                                <h2 className=" pl-4 text-1xl font-semibold text-white">Software
                                    Engineer</h2>
                            </div>
                            <div className=" flex justify-start items-center">
                                <MdHome className="text-white text-2xl"/>
                                <h2 className=" pl-4 text-1xl font-semibold text-white">Nakano-ku,
                                    Tokyo</h2>
                            </div>
                            <div className=" flex justify-start items-center">
                                <MdEmail className="text-white text-2xl"/>
                                <h2 className=" pl-4 text-1xl font-semibold text-white">
                                    <a href="mailto:SimonLngstaff@gmail.com">
                                        simonlngstaff@gmail.com
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <ProfileDescription>
                        <h2 className="text-2xl mb-2 font-semibold text-center text-white">About
                            Me</h2>
                        <p className="text-gray-200">
                            I am a software engineer with a passion for creating and building new things. I
                            have a strong interest in the latest technologies and am always looking to learn
                            new things. I have a strong background in JavaScript and TypeScript and have
                            experience working with React, React Native, Node.js, and Svlete. I also have
                            experience working with C#, SQL, and Python. I have recently moved to Tokyo and
                            am looking for a new opportunity to grow and learn.
                        </p>
                    </ProfileDescription>
                </ProfileInfo>

                <ProfileSkills>

                    <div className="w-full">
                        <h2 className="text-2xl mb-2 font-semibold text-white">Programming
                            Languages</h2>
                        <LanguageBar language={"JavaScript"} percent={100} level={"Experienced"}/>
                        <LanguageBar language={"TypeScript"} percent={90} level={"Experienced"}/>
                        <LanguageBar language={"SQL"} percent={75} level={"Intermediate"}/>
                        <LanguageBar language={"C#"} percent={70} level={"Intermediate"}/>
                        <LanguageBar language={"Python"} percent={30} level={"Junior"}/>
                    </div>

                    <div className="w-full my-10">
                        <h2 className="text-2xl mb-2 font-semibold text-white">Spoken
                            Languages</h2>
                        <LanguageBar language={"English"} percent={100} level={"Native"}/>
                        <LanguageBar language={"Japanese"} percent={10} level={"Beginner / N5"}/>
                    </div>
                </ProfileSkills>
            </ProfileFlex>
        </Card>
    );
}

export default Profile;

