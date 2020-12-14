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
    min-width: ${(props) => props.width}px;
    width: ${(props) => props.width}px;
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

export default function RightSideBlock(props) {
  const layout = useContext(LayoutContext);
  return (
    <Container className={props.className} style={props.style}>
      <Wrapper sideWidth={props.sideWidth} maxWidth={layout.maxWidth}>
        <Side width={props.sideWidth}>{props.sideContent()}</Side>
        <Content maxWidth={layout.maxWidth}>{props.children} </Content>
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
