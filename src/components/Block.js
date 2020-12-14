import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints, getMargin } from "../helpers/Layout";
import { LayoutContext } from "./Main";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: ${getMargin(3)};
  padding-bottom: ${getMargin(3)};
  background-image: ${(props) =>
    props.backgroundImage ? "url(" + props.backgroundImage + ")" : "none"};
  @media (min-width: ${breakpoints.mobile}) {
    padding-top: ${getMargin(5)};
    padding-bottom: ${getMargin(5)};
  }
`;
const Content = styled.div`
  width: calc(100% - ${getMargin(2)});
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth};
`;
/**
 *
 * Block is the main wrapper component for this template.
 * This element enables to have consistent spacing between sections using the theme functionality to define a central column
 * You can include most of the components
 */
export default function Block(props) {
  const layout = useContext(LayoutContext);
  return (
    <Container
      className={props.className}
      style={props.style}
      backgroundImage={props.backgroundImage}
    >
      <Content maxWidth={layout.maxWidth}>{props.children}</Content>
    </Container>
  );
}

Block.defaultProps = {
  style: {},
  className: "",
  backgroundImage: null,
};

Block.propTypes = {
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  /**
  React CSS format to override rules has required by design
  */
  style: PropTypes.object,
};
