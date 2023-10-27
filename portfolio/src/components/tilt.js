import Tilt from "react-parallax-tilt";

export const CardTilt = (url) => {
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
        <div
          style={{
            height: "200px",
            width: "400px",
            backgroundImage: `url(${url.url})`,
            backgroundSize: "cover",
            boxShadow: "0px 18px 10px -15px rgba(0,0,0,1.0)",
          }}
        ></div>
      </Tilt>
    </>
  );
};
