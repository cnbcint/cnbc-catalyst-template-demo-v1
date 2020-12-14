import React from "react";
import PropTypes from "prop-types";
import { breakpoints } from "../helpers/Layout";

import styled from "styled-components";
const Background = styled.div`
  background-image: url(${(props) => props.image.mobile});
  @media (min-width: ${breakpoints.mobile}) {
    background-image: url(${(props) => props.image.tablet});
  }
  @media (min-width: ${breakpoints.tablet}) {
    background-image: url(${(props) => props.image.desktop});
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
`;
const Overlay = styled.div`
  background-color: ${(props) => props.overlayColor};
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
`;

export default function ParallaxBackground(props) {
  return (
    <Background
      className={props.className}
      image={props.image}
      style={props.style}
    >
      <Overlay
        overlayColor={props.overlayColor}
        className={props.className ? props.className + "__overlay" : ""}
      />
      <Content className={props.className ? props.className + "__content" : ""}>
        {props.children}
      </Content>
    </Background>
  );
}

ParallaxBackground.defaultProps = {
  overlayColor: "tranparent",
  className: "",
};

ParallaxBackground.propTypes = {
  className: PropTypes.string,

  /**
   * RGBA css property for overlay to make background do not interfere with copys
   */
  overlayColor: PropTypes.string,

  /**
   * Responsive background image this can be differen aspect ratios per screen sizes
   */
  image: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }).isRequired,
  /**
   * React CSS Overrides
   */
  style: PropTypes.object,
  /**
   * The parallax content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};
