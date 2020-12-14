import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "../helpers/Layout";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  align-items: inherit;
  margin: -1rem;
  > div {
    width: ${(props) => `calc(${100 / props.columns.mobile}% - 2rem)`};
    margin: 1rem;
    @media (min-width: ${breakpoints.mobile}) {
      width: ${(props) => `calc(${100 / props.columns.tablet}% - 2rem)`};
    }
    @media (min-width: ${breakpoints.tablet}) {
      width: ${(props) => `calc(${100 / props.columns.desktop}% - 2rem)`};
    }
  }
`;

export default function FlexList(props) {
  return (
    <FlexContainer
      columns={props.columns}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </FlexContainer>
  );
}

FlexList.defaultProps = {
  columns: { mobile: 1, desktop: 3, tablet: 2 },
};

FlexList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  style: PropTypes.object,
  columns: PropTypes.shape({
    mobile: PropTypes.number,
    desktop: PropTypes.number,
    tablet: PropTypes.number,
  }),
};
