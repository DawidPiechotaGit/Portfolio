import Tilt from "react-parallax-tilt";
import styled from "styled-components";

export const CardTilt = (url) => {
  const StyledCard = styled.div`
    height: 200px;
    width: 400px;
    background-image: url(${url.url});
    background-size: cover;
    box-shadow: 0px 18px 40px -25px rgb(228 228 228);

    @media (max-width: 600px) {
      height: 100px;
      width: 200px;
    }
  `;
  return (
    <>
      <Tilt
        glareEnable="true"
        glareColor="white"
        transitionSpeed={1200}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        transitionEasing="cubic-bezier(.03,.98,.52,.99)"
        glareMaxOpacity={0.2}
      >
        <StyledCard></StyledCard>
      </Tilt>
    </>
  );
};
