import "../App.css";
import { ParticleBG } from "./particles-bg";

export const Title = () => {
  return (
    <>
      <ParticleBG></ParticleBG>
      <div className="home-wrapper">
        <div className="home-container">
          <div className="title-wrapper">
            <h1>Dawid Piechota</h1>
            <h2>
              <span>Junior</span> Frontend Developer
            </h2>
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
