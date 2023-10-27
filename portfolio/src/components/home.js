import "../App.css";
import { Navigation } from "./navigation";
import { Cards } from "./cards";
import { Title } from "./title";
import { CardShowcase } from "./card-showcase";

export const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Title></Title>
      <CardShowcase></CardShowcase>
      <Cards></Cards>
    </>
  );
};
