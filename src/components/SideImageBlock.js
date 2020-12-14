import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints, getMargin } from "../helpers/Layout";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: ${(props) =>
      props.imageBlockPosition === "left" ? "row" : "row-reverse"};
    align-items: stretch;
  }
  justify-content: center;
  position: relative;
  box-sizing: border-box;

  margin-top: ${getMargin(3)};
  margin-bottom: ${getMargin(3)};
  @media (min-width: ${breakpoints.mobile}) {
    margin-top: ${getMargin(5)};
    margin-bottom: ${getMargin(5)};
  }
`;
const ContentBlock = styled.div`
  width: 100%;
  padding: ${getMargin(1)};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  @media (min-width: ${breakpoints.mobile}) {
    padding: ${getMargin(3)};
    width: ${(props) => props.imageBlockWidth};
  }
`;
const ContentContainer = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    max-width: ${(props) => props.contentMaxWidth};
  }
`;

const ImageBlock = styled.div`
  background: black;
  background-image: url(${(props) => props.image.mobile});
  background-position: center;
  background-size: cover;
  img {
    margin: 0;
  }

  @media (min-width: ${breakpoints.mobile}) {
    img {
      display: none;
    }
    width: ${(props) => props.imageBlockWidth};
  }
`;
/**
 * Full width block with a side image this block will take 100% of parent component this component can also be inside a Block component
 */
export default function SideImageBlock(props) {
  return (
    <Container
      className={props.className}
      imageBlockPosition={props.imageBlockPosition}
      style={props.style}
    >
      <ImageBlock
        className={props.className ? props.className + "__image_container" : ""}
        imageBlockWidth={props.imageBlockWidth}
        image={props.image}
      >
        <picture>
          <source
            media={`(min-width:${breakpoints.tablet})`}
            srcSet={props.image.desktop}
          />
          <source
            media={`(min-width:${breakpoints.mobile})`}
            srcSet={props.image.tablet}
          />
          <img src={props.image.mobile} loading="lazy" />
        </picture>
      </ImageBlock>
      <ContentBlock
        className={props.className ? props.className + "__content_block" : ""}
        backgroundColor={props.contentBackgroundColor}
        imageBlockWidth={`${100 - parseInt(props.imageBlockWidth)}%`}
      >
        <ContentContainer
          className={
            props.className ? props.className + "__content_container" : ""
          }
          contentMaxWidth={props.contentMaxWidth}
        >
          {props.children}
        </ContentContainer>
      </ContentBlock>
    </Container>
  );
}
SideImageBlock.defaultProps = {
  imageBlockWidth: "50%",
  imageBlockPosition: "left",
  contentMaxWidth: "auto",
  contentBackgroundColor: "transparent",
  className: "",
};

SideImageBlock.propTypes = {
  className: PropTypes.string,

  /**
   * The content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,

  /**
   * Block Image Position
   */
  imageBlockPosition: PropTypes.oneOf(["left", "right"]),

  /**
   * Internal content wrapper Max width CSS width
   */
  contentMaxWidth: PropTypes.string,

  /**
   * Image Block size in persentage
   * */
  imageBlockWidth: PropTypes.string,

  /**
   * HEX CSS Background Color for content block
   */
  contentBackgroundColor: PropTypes.string,

  /**
   * Responsive background image this can be differen aspect ratios per screen sizes
   */
  image: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }).isRequired,

  /**
  React CSS format to override rules has required by design
  */
  style: PropTypes.object,
};
