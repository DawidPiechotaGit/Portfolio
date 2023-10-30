import "../App.css";
import { Cards } from "./cards";
import { Title } from "./title";
import { CardShowcase } from "./card-showcase";
import { Contact } from "./contact";

export const Home = () => {
  return (
    <>
      <Title></Title>
      <Cards></Cards>
      <CardShowcase></CardShowcase>
      <Contact></Contact>
    </>
  );
};
