import styled from "styled-components";


const Hero = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  align-items: center;
  color: #fff;

  @media (max-width: 1080px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const HeroImage = styled.div`
  background-image: url("./images/computer.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  flex: 1;
  @media (max-width: 1080px) {
    height: fit-content;
    flex: 0.5;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  margin: 40px;
  @media (max-width: 1080px) {
    justify-content: space-around;
    margin: 0;
  }
`;

const HeroText = styled.div`
  padding: 20px;
  max-width: 800px;
  @media (max-width: 1080px) {
    padding: 10px;
    line-height: normal;
    font-size: 3rem;
  }
`;

const getYearsExperience = () => {
    const startDate = new Date("2021-02-01");
    const currentDate = new Date();
    return ((currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365.25)).toFixed(1);
}

const Highlight = styled.span`
  color: #f7df1e;
  padding: 0 10px;
`;

const Highlight2 = styled.span`
  color: #00c4ff;
`;

function HeroBanner() {
    return (
        <div>
            <Hero>
                <HeroImage/>
                <HeroTextContainer>
                    <HeroText>
                        <Highlight>Software Engineer </Highlight> with {getYearsExperience()} years of experience
                        in <Highlight2>Full Stack
                        Development</Highlight2>
                    </HeroText>
                </HeroTextContainer>
            </Hero>
        </div>
    );
}

export default HeroBanner;