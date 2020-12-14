import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./Image";

import { breakpoints, getMargin } from "../helpers/Layout";

const ImageContainer = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    float: ${(props) => props.position};
    display: block;
    margin-right: ${(props) =>
      props.position === "left" ? getMargin(2) : "auto"};
    margin-left: ${(props) =>
      props.position === "right" ? getMargin(2) : "auto"};
    width: 50%;
    img {
      margin: 0;
      margin-top: ${getMargin(1)};
      margin-bottom: ${getMargin(1)};
    }
  }
`;

/**
 * Add an image capable of be wrapper around text left or right of the text
 */
export default function AlongSideImage(props) {
  return (
    <div>
      <ImageContainer position={props.position}>
        <Image source={props.image} alt={props.alt} />
      </ImageContainer>
      {props.children}
    </div>
  );
}

AlongSideImage.defaultProps = {
  position: "left",
};

AlongSideImage.propTypes = {
  /**
   * Allows 2 types of alignment
   */
  position: PropTypes.oneOf(["left", "right"]),

  /**
   * Image object with values for mobile, tablet and desktop
   */
  image: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }).isRequired,

  /**
   * Image alternate text
   */
  alt: PropTypes.string.isRequired,

  /**
   * The content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};
