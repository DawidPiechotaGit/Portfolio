import "../App.css";
import { Navigation } from "./navigation";
import { Cards } from "./cards";
import { Title } from "./title";

export const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Title></Title>
      <Cards></Cards>
    </>
  );
};
