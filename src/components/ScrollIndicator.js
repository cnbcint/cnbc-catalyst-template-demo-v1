import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useAnimation from "../hooks/useAnimation";
import useScroll from "../hooks/useScroll";
import { getAnimation, breakpoints } from "../helpers/Layout";

const Container = styled.div`
  color: ${(props) => props.copyColor};
  font-size: 0.8rem;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
  }
  line-height: 1.4rem;
  z-index: 1;
  img {
    width: 34px;
    margin: 10px auto;
  }
`;

export default function ScrollIndicator(props) {
  const animationConfig = {
    animationName: getAnimation(props.copyAligment),
    duration: 500,
    delay: 250,
    loop: props.loopAnimations,
    autoStart: true,
  };

  const { ref: refScroll } = useAnimation(animationConfig);
  const { y } = useScroll();
  const scrollDistance = 600;

  return (
    <Container
      copyColor={props.copyColor}
      className={props.className}
      ref={refScroll}
      style={y > scrollDistance ? { visibility: "hidden" } : {}}
    >
      Scroll for more
      <img src="http://localhost:8080/images/chevron-down.png" />
    </Container>
  );
}

ScrollIndicator.defaultProps = {
  copyColor: "white",
  className: "",
};

ScrollIndicator.propTypes = {
  className: PropTypes.string,
  copyAligment: PropTypes.oneOf(["left", "center", "right"]),
  loopAnimations: PropTypes.bool,
  copyColor: PropTypes.string,
  hideOnScroll: PropTypes.bool,
};
