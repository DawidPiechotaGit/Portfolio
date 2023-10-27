import "../App.css";
import { Cards } from "./cards";
import { Title } from "./title";
import { CardShowcase } from "./card-showcase";

export const Home = () => {
  return (
    <>
      <Title></Title>
      <CardShowcase></CardShowcase>
      <Cards></Cards>
    </>
  );
};
