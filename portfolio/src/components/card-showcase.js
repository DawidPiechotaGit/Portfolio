import Tilt from "react-parallax-tilt";
import styled from "styled-components";

const ShowcaseWrapper = styled.div`
  //   background: linear-gradient(
  //     109deg,
  //     var(--secondary) 50.5%,
  //     var(--background) 50.55%
  //   );
  background: var(--background);
`;

const ShowcaseContainer = styled.div`
  padding: 10% 20%;
  height: 150vh;
`;

const ShowcaseContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 5%;
  color: white;
  margin-bottom: 10%;
`;

const ShowcaseContainerRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  gap: 5%;
  color: white;
  margin-bottom: 10%;
`;

const TextContainer = styled.div`
  height: 200px;
  width: 100%;
  font-size: 26px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  border-radius: 5px;
  border: 2px solid var(--primary);
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
      <ShowcaseWrapper className="showcase-wrapper">
        <ShowcaseContainer className="showcase-container">
          <ShowcaseContainerLeft className="showcase1-container">
            <div className="showcase1-img">
              <Tilt
                glareEnable="true"
                glareColor="white"
                transitionSpeed={1200}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                glareMaxOpacity={0.2}
              >
                <div
                  style={{
                    height: "200px",
                    width: "400px",
                    backgroundImage: "url(https://i.imgur.com/fY0Txme.png)",
                    backgroundSize: "cover",
                    boxShadow: "0px 18px 10px -15px rgba(0,0,0,1.0)",
                  }}
                ></div>
              </Tilt>
            </div>
            <TextContainer className="text-container">
              <p>Simple Weather App</p>
              <Description>Built with OpenWeather API</Description>
              <div className="btn-container">
                <ButtonStyled>Live Demo</ButtonStyled>
                <ButtonStyled>Code</ButtonStyled>
              </div>
            </TextContainer>
          </ShowcaseContainerLeft>
          <ShowcaseContainerRight className="showcase1-container">
            <div className="showcase1-img">
              <Tilt
                glareEnable="true"
                glareColor="white"
                transitionSpeed={1200}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                glareMaxOpacity={0.2}
              >
                <div
                  style={{
                    height: "200px",
                    width: "400px",
                    backgroundImage: "url(https://i.imgur.com/IJFxqez.png)",
                    backgroundSize: "cover",
                    boxShadow: "0px 18px 10px -15px rgba(0,0,0,1.0)",
                  }}
                ></div>
              </Tilt>
            </div>
            <TextContainer
              className="text-container"
              style={{ alignItems: "flex-end" }}
            >
              <p>Advanced Weather App</p>
              <Description>Built with OpenWeather API</Description>
              <div className="btn-container">
                <ButtonStyled>Live Demo</ButtonStyled>
                <ButtonStyled>Code</ButtonStyled>
              </div>
            </TextContainer>
          </ShowcaseContainerRight>
          <ShowcaseContainerLeft className="showcase1-container">
            <div className="showcase1-img">
              <Tilt
                glareEnable="true"
                glareColor="white"
                transitionSpeed={1200}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                glareMaxOpacity={0.2}
              >
                <div
                  style={{
                    height: "200px",
                    width: "400px",
                    backgroundImage: "url(https://i.imgur.com/YsBWo3u.png)",
                    backgroundSize: "cover",
                    boxShadow: "0px 18px 10px -15px rgba(0,0,0,1.0)",
                  }}
                ></div>
              </Tilt>
            </div>
            <TextContainer className="text-container">
              <p>Shortly: Link Shortner</p>
              <Description>Design</Description>
              <div className="btn-container">
                <a href="https://shortly-a5f5b.web.app/" target="_blank">
                  <ButtonStyled>Live Demo</ButtonStyled>
                </a>
                <ButtonStyled>Code</ButtonStyled>
              </div>
            </TextContainer>
          </ShowcaseContainerLeft>
          <ShowcaseContainerRight className="showcase1-container">
            <div className="showcase1-img">
              <Tilt
                glareEnable="true"
                glareColor="white"
                transitionSpeed={1200}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                glareMaxOpacity={0.2}
              >
                <div
                  style={{
                    height: "200px",
                    width: "400px",
                    backgroundImage: "url(https://i.imgur.com/yTRy8UG.png)",
                    backgroundSize: "cover",
                    boxShadow: "0px 18px 10px -15px rgba(0,0,0,1.0)",
                  }}
                ></div>
              </Tilt>
            </div>
            <TextContainer
              className="text-container"
              style={{ alignItems: "flex-end" }}
            >
              <p>Gaming Server Website</p>
              <Description>
                Multi-page website built for a game server
              </Description>
              <div className="btn-container">
                <ButtonStyled>Live Demo</ButtonStyled>
                <ButtonStyled>Code</ButtonStyled>
              </div>
            </TextContainer>
          </ShowcaseContainerRight>
        </ShowcaseContainer>
      </ShowcaseWrapper>
    </>
  );
};
