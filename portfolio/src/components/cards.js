import "../App.css";
import styled from "styled-components";

const AboutMeWrapper = styled.div`
  height: 100vh;
  background: var(--secondary);
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
          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input type="radio" className="card-input" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row">
              <div className="icon">2</div>
              <div className="description">
                <h4>Summer</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input type="radio" className="card-input" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4>Summer</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input type="radio" className="card-input" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
            <div className="row">
              <div className="icon">4</div>
              <div className="description">
                <h4>Summer</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
        </div>
      </AboutMeWrapper>
    </>
  );
};
