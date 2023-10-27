import "../App.css";
import { Navigation } from "./navigation";
import { Cards } from "./cards";
import styled from "styled-components";

const styledTitle = styled.h1``;

export const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="home-wrapper">
        <div className="home-container">
          <h1>
            <span>Junior</span> Frontend Developer
          </h1>
          <div className="circle-wrapper">
            <div className="outline circle"></div>
            <img
              className="image-icon"
              src="https://i.imgur.com/Nt6j1zO.jpg"
            ></img>
          </div>
        </div>
      </div>
      <Cards></Cards>
    </>
  );
};
