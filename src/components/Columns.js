import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "../helpers/Layout";
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
  > div {
    width: calc(100% - 0.5rem);
    @media (min-width: ${breakpoints.mobile}) {
      width: calc(${(props) => 100 / props.count}% - 1rem);
    }
    box-sizing: border-box;
  }
`;
/**
 *
 * This component will distribute any children in columns the amount of columns is determined
 * by the amouunt of children nested.
 */
export default function Columns(props) {
  return (
    <Container
      count={props.children.length}
      className={props.className}
      style={props.style}
    >
      {props.children.map((item, i) => {
        return (
          <div
            key={i}
            className={
              item.props.className ? item.props.className + "__wrapper" : ""
            }
          >
            {item}
          </div>
        );
      })}
    </Container>
  );
}

Columns.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  /**
   * Style object in React format
   */
  style: PropTypes.object,
};
