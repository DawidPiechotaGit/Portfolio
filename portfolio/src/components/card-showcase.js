import styled from "styled-components";
import { CardTilt } from "./tilt";

const ShowcaseWrapper = styled.div`
  //   background: linear-gradient(
  //     109deg,
  //     var(--secondary) 50.5%,
  //     var(--background) 50.55%
  //   );
  background: var(--background);
`;

const ShowcaseContainer = styled.div`
  padding: 5% 20%;
  height: 170vh;

  @media (max-width: 600px) {
    height: 100%;
  }
`;

const ShowcaseContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 5%;
  color: white;
  margin-bottom: 10%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ShowcaseContainerRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  gap: 5%;
  color: white;
  margin-bottom: 10%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  height: 200px;
  width: 100%;
  font-size: 26px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 600px) {
    align-items: center;
  }
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 200;
`;

const ButtonStyled = styled.button`
  min-width: 70px;
  padding: 5px;
  margin: 5px;
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  border-radius: 0px;
  border: 1px solid var(--primary);
  color: white;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transition: all 0.7s ease-out;
    background-color: var(--primary);
  }
`;

export const CardShowcase = () => {
  return (
    <>
      <ShowcaseWrapper className="showcase-wrapper" id="showcase">
        <ShowcaseContainer className="showcase-container">
          <ShowcaseContainerLeft className="showcase1-container">
            <div>
              <CardTilt url="https://i.imgur.com/fY0Txme.png"></CardTilt>
            </div>
            <TextContainer className="text-container">
              <p>Simple Weather App</p>
              <Description>Built with OpenWeather API</Description>
              <div className="btn-container">
                <a href="https://weatherapp-cf675.web.app/" target="_blank">
                  <ButtonStyled>Live Demo</ButtonStyled>
                </a>
                <a
                  href="https://github.com/DawidPiechotaGit/WeatherApp"
                  target="_blank"
                >
                  <ButtonStyled>Code</ButtonStyled>
                </a>
              </div>
            </TextContainer>
          </ShowcaseContainerLeft>
          <ShowcaseContainerRight className="showcase1-container">
            <div>
              <CardTilt url="https://i.imgur.com/IJFxqez.png"></CardTilt>
            </div>
            <TextContainer className="text-container end">
              <p>Advanced Weather App</p>
              <Description>Built with OpenWeather API</Description>
              <div className="btn-container">
                <a href="https://weatherapp-a4294.web.app/" target="_blank">
                  <ButtonStyled>Live Demo</ButtonStyled>
                </a>
                <a
                  href="https://github.com/DawidPiechotaGit/WeatherAPP-/tree/main/weatherapp"
                  target="_blank"
                >
                  <ButtonStyled>Code</ButtonStyled>
                </a>
              </div>
            </TextContainer>
          </ShowcaseContainerRight>
          <ShowcaseContainerLeft className="showcase1-container">
            <div>
              <CardTilt url="https://i.imgur.com/YsBWo3u.png"></CardTilt>
            </div>
            <TextContainer className="text-container">
              <p>Shortly: Link Shortner</p>
              <Description>Design</Description>
              <div className="btn-container">
                <a href="https://shortly-a5f5b.web.app/" target="_blank">
                  <ButtonStyled>Live Demo</ButtonStyled>
                </a>
                <a
                  href="https://github.com/DawidPiechotaGit/Shortly"
                  target="_blank"
                >
                  <ButtonStyled>Code</ButtonStyled>
                </a>
              </div>
            </TextContainer>
          </ShowcaseContainerLeft>
          <ShowcaseContainerRight className="showcase1-container">
            <div>
              <CardTilt url="https://i.imgur.com/yTRy8UG.png"></CardTilt>
            </div>
            <TextContainer className="text-container end">
              <p>Gaming Server Website</p>
              <Description>
                Multi-page website built for a game server
              </Description>
              <div className="btn-container">
                <a href="https://pulse-521e0.web.app/" target="_blank">
                  <ButtonStyled>Live Demo</ButtonStyled>
                </a>
                <a
                  href="https://github.com/DawidPiechotaGit/PulseWebsite"
                  target="_blank"
                >
                  <ButtonStyled>Code</ButtonStyled>
                </a>
              </div>
            </TextContainer>
          </ShowcaseContainerRight>
          <ShowcaseContainerLeft className="showcase1-container">
            <div>
              <CardTilt url="https://i.imgur.com/cAobfNo.png"></CardTilt>
            </div>
            <TextContainer className="text-container">
              <p>Calmly</p>
              <Description>
                Calmly offers an interactive toolkit that will measure your
                stress and provide the necessary tools to brighten your day.
              </Description>
              <div className="btn-container">
                <a href="https://calmly.space/#/" target="_blank">
                  <ButtonStyled>Live Demo</ButtonStyled>
                </a>
                <a
                  href="https://github.com/infoshareacademy/jfddr9-calmly"
                  target="_blank"
                >
                  <ButtonStyled>Code</ButtonStyled>
                </a>
              </div>
            </TextContainer>
          </ShowcaseContainerLeft>
        </ShowcaseContainer>
      </ShowcaseWrapper>
    </>
  );
};
