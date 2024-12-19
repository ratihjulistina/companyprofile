import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "CFD Analysis",
        500,
        "Vibration Analysis",
        500,
        "FEA Analysis",
        500,
        "Acoustic Analysis",
        500,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        marginLeft: "5px",
        fontSize: "1.5em",
        textAlign: "left",
        color: "#d9082d",
        fontWeight: "bold",
        display: "inline-block",
        width: "80%",
      }}
      repeat={1}
    />
  );
};

export default Typing;
