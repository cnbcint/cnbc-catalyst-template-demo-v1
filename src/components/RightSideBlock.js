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
  font-family:"Proxima Nova"!important;
  font-weight: 700!important;
  font-size: 1.4rem;
  line-height: 110%;
  font-family: "Proxima Nova", sans-serif;
  p::first-letter {
    margin-left: -10px;
  }
  box-sizing: border-box;
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    min-width: ${(props) => props.width}px;
    width: ${(props) => props.width}px;
    padding-left: ${getMargin(2)};
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
`;
const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: calc(76.45% - 600px);
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  @media (min-width: ${breakpoints.tablet}) {
    width: calc(100% - ${getMargin(2)});
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
    padding: 0;
  }
`;
const Wrapper = styled.div`
  // max-width: calc(
  //   ${(props) => props.maxWidth} + ${(props) => 2 * props.sideWidth}px
  // );
  max-width: ${(props) => props.maxWidth};
  display: flex;
  width: calc(100% - ${getMargin(2)});
  align-items: center;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: baseline;
  }
`;

export default function RightSideBlock(props) {
  const layout = useContext(LayoutContext);
  return (
    <Container className={props.className} style={props.style}>
      <Wrapper sideWidth={props.sideWidth} maxWidth={layout.maxWidth}>
        <Content maxWidth={layout.maxWidth}>{props.children} </Content>
        <Side width={props.sideWidth}>{props.sideContent()}</Side>
      </Wrapper>
    </Container>
  );
}
RightSideBlock.defaultProps = {
  sideWidth: 300,
};
RightSideBlock.propTypes = {
  className: PropTypes.string,
  sideContent: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  style: PropTypes.object,
  sideWidth: PropTypes.number,
};
