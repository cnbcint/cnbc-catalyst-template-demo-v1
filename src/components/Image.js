import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints } from "../helpers/Layout";
import useAnimation from "../hooks/useAnimation";
const ImageElement = styled.img`
  width: 100%;
`;
/**
Responsive image component with lazyload tag. 
This components required images for desktop tablet and mobile screensizes. 
Each image can have it's own aspect ratio to achive more flexibility on design.
The image will take 100% of space available from parent container.
 */
export default function Image(props) {
  const { ref: refImage } = useAnimation({
    animationName: "fadeIn",
    duration: 500,
    delay: 0,
    loop: true,
    autoStart: true,
  });

  return (
    <picture className={props.className}>
      <source
        media={`(min-width:${breakpoints.tablet})`}
        srcSet={props.source.desktop}
      />
      <source
        media={`(min-width:${breakpoints.mobile})`}
        srcSet={props.source.tablet}
      />
      <ImageElement
        ref={refImage}
        src={props.source.mobile}
        style={props.style}
        alt={props.alt}
        loading="lazy"
      />
    </picture>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  /**
   Image url source for desktop tablet and mobile
   */
  source: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }).isRequired,
  /**
   * React CSS overrides to IMG element
   */
  style: PropTypes.object,
};

Image.defaultProps = {
  className: "",
};
