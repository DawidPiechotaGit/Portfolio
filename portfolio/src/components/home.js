import "../App.css";
import { Navigation } from "./navigation";
import { Cards } from "./cards";
import "styled-components";

const styledTitle = styled.h1``;

export const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <h1>Junior Frontend Developer</h1>
      </div>
      <Cards></Cards>
    </>
  );
};
