import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useAnimation from "../hooks/useAnimation";
import {
  breakpoints,
  getAnimation,
  getMargin,
  getJustifyContent,
} from "../helpers/Layout";
import { LayoutContext } from "./Main";

const Container = styled.div`
  font-size: 1.5rem;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
  background-color: none;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  box-sizing: border-box;
  text-align: ${(props) => props.aligment};
`;

const Picture = styled.picture`
  display: block;
  img {
    margin: 0;
  }
`;
const Content = styled.div`
  position: absolute;
  width: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    width: 80%;
  }
  padding: ${getMargin(2)};
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => getJustifyContent(props.aligment)};
  > hr {
    width: 50%;
    margin: ${getMargin(2)} 0;
    border-color: ${(props) => props.dividerColor};
    background-color: ${(props) => props.dividerColor};
  }
  text-align: ${(props) => props.aligment};
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;
/**
 Component that allows to have a quote or a sentence with background image.
*/
export default function Poster(props) {
  const layout = useContext(LayoutContext);
  const { ref: refCopy } = useAnimation({
    animationName: getAnimation(props.aligment),
    duration: 500,
    delay: 0,
    loop: props.loopAnimations,
    autoStart: true,
  });
  const { ref: refDevider } = useAnimation({
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
    >
      {props.image && (
        <Picture>
          <source
            media={`(min-width:${breakpoints.tablet})`}
            srcSet={props.image.desktop}
          />
          <source
            media={`(min-width:${breakpoints.mobile})`}
            srcSet={props.image.tablet}
          />
          <img src={props.image.mobile} alt="poster" loading="lazy" />
        </Picture>
      )}
      <Overlay />
      <Content
        className={props.className ? props.className + "__content" : ""}
        aligment={props.aligment}
        dividerColor={layout.colors[props.dividerColor]}
      >
        <div ref={refCopy}>{props.children}</div>
        {props.addDivider && <hr ref={refDevider} />}
      </Content>
    </Container>
  );
}

Poster.defaultProps = {
  dividerColor: "primary",
  loopAnimations: true,
  aligment: "center",
  className: "",
  style: {},
  addDivider: true,
};

Poster.propTypes = {
  /**
   * Allow to hide or show divider line after the text
   */
  addDivider: PropTypes.bool,
  /**
   * Allow to chosse a devider colors from Theme using the 3 types of colors
   */
  dividerColor: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  className: PropTypes.string,
  /**
   * React CSS fromat for overriding styles
   */
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  /**
   * Allow animations to play gain once the user scrolls this element back into the screen
   */
  loopAnimations: PropTypes.bool,
  /**
   * Image into responsive format with 3 breakpoints
   */
  image: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }),
  /**
   * This also affect animation
   */
  aligment: PropTypes.oneOf(["left", "center", "right"]),
};
