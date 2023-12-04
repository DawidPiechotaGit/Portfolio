import "../App.css";
import styled from "styled-components";

const AboutMeWrapper = styled.div`
  height: 100vh;
  background: var(--secondary);
  // background-image: url("https://i.imgur.com/nfI5xIN.jpg");
  // background-attachment: fixed;
`;

export const Cards = () => {
  return (
    <>
      <AboutMeWrapper className="card-wrapper" id="cards">
        <div className="card-container">
          <input
            type="radio"
            className="card-input"
            name="slide"
            id="c1"
            defaultChecked
          />
          <label htmlFor="c1" className="card hidden">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <h4>Who am I?</h4>
                <p>
                  My name is Dawid Piechota, and I have a multicultural
                  background, having grown up in both Poland and England. I am
                  proficient in both English and Polish, and I have a basic
                  understanding of the German language. In 2019, I completed my
                  A-levels in Mathematics and Business Studies, demonstrating my
                  commitment to academic excellence.
                </p>
              </div>
            </div>
          </label>
          <input type="radio" className="card-input" name="slide" id="c2" />
          <label htmlFor="c2" className="card hidden">
            <div className="row">
              <div className="icon">2</div>
              <div className="description">
                <h4>Why Front-End?</h4>
                <p>
                  While pursuing my interests in gaming, I discovered a passion
                  for coding through LUA. This hobby ignited my desire to pursue
                  a career in the coding world. To further develop my skills and
                  knowledge, I enrolled in a frontend developer course offered
                  by infoShare Academy. Throughout this intensive program, I
                  have been immersed in HTML/CSS, JavaScript, and React, among
                  other relevant programmes.
                </p>
              </div>
            </div>
          </label>
          {/* <input type="radio" className="card-input" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4>Why Front-End?</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label> */}
          <input type="radio" className="card-input" name="slide" id="c4" />
          <label htmlFor="c4" className="card hidden">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4>Contact Details</h4>
                <p>Email: piechotadawid2000@gmail.com</p>
                <p>Phone: +49 179 604 2925</p>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/dawid-piechota-206213266/"
                >
                  LinkedIn: Click Me!
                </a>
              </div>
            </div>
          </label>
        </div>
      </AboutMeWrapper>
    </>
  );
};
