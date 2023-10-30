import "../App.css";
import { ParticleBG } from "./particles-bg";
import { Navigation } from "./navigation";

export const Title = () => {
  return (
    <>
      <ParticleBG></ParticleBG>
      <Navigation></Navigation>
      <div className="home-wrapper" id="home">
        <div className="home-container">
          <div className="title-wrapper">
            <h1>Dawid Piechota</h1>
            <h2>Front-End Developer</h2>
          </div>
          <div className="circle-wrapper">
            <div className="outline circle"></div>
            <img
              className="image-icon"
              src="https://i.imgur.com/Nt6j1zO.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
