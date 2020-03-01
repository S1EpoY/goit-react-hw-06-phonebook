import React from "react";
import { CSSTransition } from "react-transition-group";
import * as slideTransitions from "../../transitions/slideTransitions.module.css";

// styles

const heading = {
  display: "block",
  width: "100%",
  color: "rgb(64, 121, 228)",
  fontSize: "40px",
  fontFamily: "Helvetica, sans-serif",
  marginBottom: "20px"
};

// component

const SectionTitle = ({ title, isVisible, children }) => (
  <>
    <CSSTransition
      in={isVisible}
      timeout={500}
      classNames={slideTransitions}
      unmountOnExit
    >
      <h2 style={heading}>{title}</h2>
    </CSSTransition>
    {children}{" "}
  </>
);

export default SectionTitle;
