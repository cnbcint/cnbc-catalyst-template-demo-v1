import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints, getMargin } from "../helpers/Layout";
import { LayoutContext } from "./Main";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  margin-top: ${getMargin(3)};
  margin-bottom: ${getMargin(3)};
  @media (min-width: ${breakpoints.mobile}) {
    margin-top: ${getMargin(5)};
    margin-bottom: ${getMargin(5)};
  }
`;
const Side = styled.div`
  width: 80%;

  box-sizing: border-box;
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    min-width: ${(props) => props.sideWidth}px;
    width: ${(props) => props.sideWidth}px;
    padding-right: ${getMargin(2)};
  }
`;
const Content = styled.div`
  width: 100%;
  max-width: calc(${(props) => props.maxWidth});
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  @media (min-width: ${breakpoints.mobile}) {
    width: calc(100% - ${getMargin(2)});
  }
`;
const Wrapper = styled.div`
  max-width: calc(
    ${(props) => props.maxWidth} + ${(props) => 2 * props.sideWidth}px
  );
  display: flex;
  width: calc(100% - ${getMargin(2)});
  align-items: center;
  flex-direction: column;
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    align-items: baseline;
  }
`;

export default function LeftSideBlock(props) {
  const layout = useContext(LayoutContext);
  return (
    <Container className={props.className} style={props.style}>
      <Wrapper sideWidth={props.sideWidth} maxWidth={layout.maxWidth}>
        <Side
          sideWidth={props.sideWidth}
          className={props.className ? props.className + "__side" : ""}
        >
          {props.sideContent()}
        </Side>
        <Content
          className={props.className ? props.className + "__content" : ""}
          maxWidth={layout.maxWidth}
        >
          {props.children}{" "}
        </Content>
      </Wrapper>
    </Container>
  );
}
LeftSideBlock.defaultProps = {
  sideWidth: 300,
};

LeftSideBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,

  /**
    React CSS format to override rules has required by design
    */
  style: PropTypes.object,

  /**
    The content that will be displayed on the left side
    */
  sideContent: PropTypes.func,

  /**
    The width of the left side content
    */
  sideWidth: PropTypes.number,
};
