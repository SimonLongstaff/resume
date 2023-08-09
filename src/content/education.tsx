import {MdSchool} from "react-icons/md";
import Card from "../components/Card";
import styled from "styled-components";

function Education() {
    return (
        <div>
            <div className="pt-16 flex content-start ">
                <MdSchool className="text-white text-2xl lg:text-5xl"/>
                <h1 className={"text-2xl lg:text-5xl font-semibold text-white pl-4"}>Education</h1>
            </div>
            <EducationFlex>
                <Card className={"bg-gray-800 border-gray-700"}>
                    <div className="px-6 py-4 ">
                        <div className="text-start flex justify-between">
                            <h2 className="text-2xl font-semibold text-white">MSc Computer
                                Science</h2>
                            <h2 className="text-1xl font-semibold text-white">2020</h2>
                        </div>
                        <div className="text-start flex justify-between">
                            <h2 className="text-1xl text-start font-semibold text-white"> University
                                of
                                Birmingham</h2>
                            <h2 className="text-1xl text-end font-semibold text-blue-300">Graduated
                                with Distinction</h2>
                        </div>
                    </div>
                </Card>
                <Card className={"bg-gray-800 border-gray-700"}>
                    <div className="px-6 py-4 ">
                        <div className="text-start flex justify-between">
                            <h2 className="text-2xl pr-2 font-semibold text-white">BSc
                                Neuroscience</h2>
                            <h2 className="text-1xl font-semibold text-white">2019</h2>
                        </div>
                        <div className="text-start flex justify-between">
                            <h2 className="text-1xl text-start font-semibold text-white"> University
                                of
                                Bristol</h2>
                            <h2 className="text-1xl text-end font-semibold text-blue-300">Achieved
                                2:2</h2>
                        </div>
                    </div>
                </Card>
            </EducationFlex>
        </div>

    )
}

const EducationFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;


export default Education
