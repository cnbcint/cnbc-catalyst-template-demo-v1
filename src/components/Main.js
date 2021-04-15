import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getMargin, breakpoints } from "../helpers/Layout";
import { ModalContext } from "../components/Modal";

export const LayoutContext = React.createContext({
  maxWidth: "500px",
  colors: null,
});

const Container = styled.div`
  display: block;
  width: 100%;
  background-color: ${(props) => props.colors.background};
  > * {
    font-size: 1.125rem;
    line-height: 140%;
    color: ${(props) => props.colors.copy};
  }
  hr {
    // border-color: ${(props) => props.primaryColor};
    border-color: ${(props) => props.colors.copy};
    border-style: solid;
    display: inline-block;
    width: 100%;
    // margin-top: ${getMargin(1)};
    margin-bottom: ${getMargin(1)};
    @media (min-width: ${breakpoints.mobile}) {
      // margin-top: ${getMargin(2)};
      margin-bottom: ${getMargin(2)};
    }
  }
  img {
    width: 100%;
    display: block;
    margin-top: ${getMargin(2)};
    margin-bottom: ${getMargin(2)};
  }
  p {
    margin: 1rem auto !important;
  }
  ul {
    list-style: disc !important;
    margin-top: ${getMargin(1)} !important;
    margin-bottom: ${getMargin(1)} !important;
    li {
      list-style: disc !important;
      margin: ${getMargin(1)} !important;
      margin-left: ${getMargin(2)} !important;
    }
  }
`;
export default function Main(props) {
  return (
    <LayoutContext.Provider
      value={{ maxWidth: props.maxWidth, colors: props.colors }}
    >
      <ModalContext.Provider value={{ modals: {} }}>
        <Container
          colors={props.colors}
          primaryColor={props.colors.primary}
          className={props.className}
          style={props.style}
        >
          {props.children}
        </Container>
      </ModalContext.Provider>
    </LayoutContext.Provider>
  );
}
Main.defaultProps = {
  maxWidth: "900px",
  colors: { primary: "black", secondary: "gray", tertiary: "red" },
};
Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  maxWidth: PropTypes.string,
  colors: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string,
    background: PropTypes.string,
    copy: PropTypes.string,
  }),
  style: PropTypes.object,
};
