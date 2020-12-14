import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useAnimation from "../hooks/useAnimation";
import { breakpoints, getAnimation } from "../helpers/Layout";

const Container = styled.blockquote`
  font-size: 1.5rem;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
  line-height: 150%;
  background-color: transparent;
  padding: 0;
  margin: 0;
  small {
    font-size: 0.8rem;
    line-height: 1rem;
    margin-top: 1rem;
    display: block;
  }
  text-align: ${(props) => props.aligment};
  > hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-color: ${(props) =>
      props.dividerColor ? props.dividerColor + " !important" : ""};
  }
`;
const Copy = styled.div`
  font-style: italic;
`;
export default function Quote(props) {
  const { ref: refCopy } = useAnimation({
    animationName: getAnimation(props.aligment),
    duration: 500,
    delay: 0,
    loop: props.loopAnimations,
    autoStart: true,
  });
  const { ref: refDevider1 } = useAnimation({
    animationName: "fadeIn",
    duration: 500,
    delay: 125,
    loop: props.loopAnimations,
    autoStart: true,
  });
  const { ref: refDevider2 } = useAnimation({
    animationName: "fadeIn",
    duration: 500,
    delay: 125,
    loop: props.loopAnimations,
    autoStart: true,
  });
  return (
    <Container
      className={props.className}
      aligment={props.aligment}
      style={props.style}
      dividerColor={props.dividerColor}
    >
      {props.addDeviders && <hr ref={refDevider1} />}
      <Copy ref={refCopy}>{props.children}</Copy>
      {props.addDeviders && <hr ref={refDevider2} />}
    </Container>
  );
}

Quote.defaultProps = {
  loopAnimations: true,
  aligment: "center",
  addDeviders: true,
  className: "",
  style: {},
};

Quote.propTypes = {
  /**
   * Valid CSS color
   */
  dividerColor: PropTypes.string,
  /**
   * Show or hide deviders
   */
  addDeviders: PropTypes.bool,
  className: PropTypes.string,
  /**
  React CSS format to override rules has required by design
  */
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  /**
   Enable to reset animation when users scrolls back into the element.
  */
  loopAnimations: PropTypes.bool,
  /**
   Quote aligment this will also affect animation beeing used
  */
  aligment: PropTypes.oneOf(["left", "center", "right"]),
};
