import {MdDateRange, MdGroup, MdOutlineAlternateEmail} from "react-icons/md";
import Card from "../components/Card";
import styled from "styled-components";
import ImageGallery from "../components/image-gallery";

const japanImages = [
    './extra/js1.jpg',
    './extra/js2.jpg',
    './extra/js3.jpg',
    './extra/js4.jpg',
    './extra/js5.jpg',
];

function ExtraCircular() {
    return (
        <div>
            <div className="pt-16 flex content-start">
                <MdGroup className=" dark:text-white text-2xl lg:text-5xl"/>
                <h1 className={"text-2xl lg:text-5xl font-semibold text-gray-800 dark:text-white pl-4"}>Extra
                    Circular</h1>
            </div>

            <ExtraCircularFlex>
                <Card className={"bg-gray-800 border-gray-700 "}>
                    <ActivityFlex>
                        <div>
                            <Header>
                                <h1 className={"text-left text-4xl font-bold text-white flex justify-between items-center "}>
                                    <span>Japanese Society</span>
                                </h1>
                                <h2 className={"text-left text-1xl font-semibold text-blue-300 "}>
                                    General Secretary
                                </h2>
                                <h2 className={"text-left text-1xl font-semibold text-white "}>
                                    <MdOutlineAlternateEmail className={"inline-block mr-2"}/>
                                    <span>University of Bristol</span></h2>
                                <h2 className={"text-left text-1xl font-semibold text-white items-center "}>
                                    <MdDateRange className={"inline-block mr-2"}/>
                                    <span>2018</span>
                                </h2>
                            </Header>

                            <ul className={"list-disc list-inside text-white text-left p-4"}>
                                <li>Elected as General Secretary of the Japanese Society in my final year of
                                    undergraduate
                                    study
                                </li>
                                <li>Helped incoming Japanese students settle into life in Bristol</li>
                                <li>Assisted temporary transfer students with the transition from Japanese to British
                                    university
                                    life
                                </li>
                                <li>Organised and hosted weekly language exchange events for Japanese and English
                                    speakers
                                </li>
                                <li>Helped organised weekly Japanese language lessons for beginners</li>
                                <li>Organised trips to Japanese restaurants and cultural events</li>
                                <li>Organised a trip to Japan for 10+ students</li>
                            </ul>

                        </div>

                        <ImageGallery images={japanImages}/>
                    </ActivityFlex>

                </Card>
            </ExtraCircularFlex>

        </div>
    );
}

const ExtraCircularFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  li {
    margin: 5px;
    text-align: left;

  }

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Header = styled.div`
  margin-left: 15px;
  margin-top: 10px;

  h2 {
    margin-left: 5px;
  }
`;

const ActivityFlex = styled.div`
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
`

export default ExtraCircular;