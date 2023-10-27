import Tilt from "react-parallax-tilt";
import styled from "styled-components";

const ShowcaseWrapper = styled.div`
  background: linear-gradient(
    109deg,
    var(--secondary) 50.5%,
    var(--background) 50.55%
  );
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
                    backgroundColor: "darkgreen",
                    backgroundImage: "url(https://i.imgur.com/fY0Txme.png)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </Tilt>
            </div>
            <TextContainer className="text-container">
              <p>Simple Weather App</p>
              <Description>Built with OpenWeather API</Description>
              <div className="btn-container">
                <button>Live Demo</button>
                <button>Code</button>
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
                    backgroundColor: "darkgreen",
                    backgroundImage: "url(https://i.imgur.com/IJFxqez.png)",
                    backgroundSize: "cover",
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
                <button>Live Demo</button>
                <button>Code</button>
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
                    backgroundColor: "darkgreen",
                    backgroundImage: "url(https://i.imgur.com/YsBWo3u.png)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </Tilt>
            </div>
            <TextContainer className="text-container">
              <p>Shortly: Link Shortner</p>
              <Description>Design</Description>
              <div className="btn-container">
                <button>Live Demo</button>
                <button>Code</button>
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
                    backgroundColor: "darkgreen",
                    backgroundImage: "url(https://i.imgur.com/yTRy8UG.png)",
                    backgroundSize: "cover",
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
                <button>Live Demo</button>
                <button>Code</button>
              </div>
            </TextContainer>
          </ShowcaseContainerRight>
        </ShowcaseContainer>
      </ShowcaseWrapper>
    </>
  );
};
