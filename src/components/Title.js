import React, {useContext}from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {   breakpoints, getAnimation, getMargin } from "../helpers/Layout";
import useAnimation from "../hooks/useAnimation";
import { LayoutContext } from "./Main";

const Container = styled.div`
  > * {
    line-height: 120%;
    text-align: ${(props) => props.aligment};
    color: ${(props) => props.color};
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;
const TH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: ${getMargin(2)};
`;
const TH3 = styled.h3`
  font-size: 1.8rem;
  margin-bottom: ${getMargin(2)};
`;
const TH4 = styled.h4`
  font-size: 1.8rem;
  margin-bottom: ${getMargin(2)};
`;
const TH5 = styled.h5`
  font-size: 1.8rem;
  margin-bottom: ${getMargin(2)};
`;
const TH6 = styled.h6`
  font-size: 1.5rem;
  margin-bottom: ${getMargin(2)};
`;
const Divider = styled.div`
  // border-style: solid;
  width:200px;
  height:15px;
  background: ${(props) => props.dividerColor} !important;
  margin: ${getMargin(1)} 0;
  @media (min-width: ${breakpoints.mobile}) {
    margin: ${getMargin(2)} 0;
  }
  // border-color: ${(props) => props.dividerColor} !important;
`;
/**
 * Title Element width animations capabilities.
 */
export default function Title(props) {
  let Element = null;
  switch (props.element) {
    case "h2":
      Element = TH2;
      break;
    case "h3":
      Element = TH3;
      break;
    case "h4":
      Element = TH4;
      break;
    case "h5":
      Element = TH5;
      break;
    case "h6":
      Element = TH6;
      break;
  }
  const { ref: refCopy } = useAnimation({
    animationName: getAnimation(props.aligment),
    duration: 500,
    delay: 0,
    loop: props.loopAnimations,
    autoStart: true,
  });


  const layout = useContext(LayoutContext);

  return (
    <Container
      color={props.color}
      className={props.className}
      style={props.style}
      aligment={props.aligment}
    >
      <Element ref={refCopy}>{props.children}
      <Divider
        dividerColor={[props.dividerColor]}
      /></Element>
     
    </Container>
  );
}

Title.defaultProps = {
  element: "h2",
  aligment: "left",
  loopAnimations: true,
  color: "inherit",
  className: "",
  style: {},
  dividerColor: "primary",
};

Title.propTypes = {
  /**
   Enable to reset animation when users scrolls back into the element.
  */
  loopAnimations: PropTypes.bool,
  /**
   CSS Property for font color
  */
  color: PropTypes.string,
  className: PropTypes.string,
  /**
  React CSS format to override rules has required by design
  */
  style: PropTypes.object,
  /**
   Title HTML element for SEO optimization
  */
  element: PropTypes.oneOf(["h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.string.isRequired,
  /**
   Title aligment this will also affect animation beeing used
  */
  aligment: PropTypes.oneOf(["left", "center", "right"]),
  /**
   * Devider color css hex
   */
   dividerColor: PropTypes.string,
};
