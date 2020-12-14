import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "../helpers/Layout";
const Container = styled.div`
  z-index: 200;
  width: 100%;
  top: ${(props) => (props.stick ? "0" : "auto")};
  @media (min-width: ${breakpoints.mobile}) {
    top: ${(props) => (props.stick ? "95px" : "auto")};
  }
  @media (min-width: ${breakpoints.tablet}) {
    top: ${(props) => (props.stick ? "100px" : "auto")};
  }
  position: ${(props) => (props.stick ? "fixed" : "relative")};
`;
let refOffset = 0;
export default function StickyBar(props) {
  const refContainer = useRef();
  const [stick, setStick] = useState(false);

  useEffect(() => {
    if (window) {
      if (refContainer.current) {
        window.addEventListener("scroll", function () {
          if (!refOffset) {
            refOffset = refContainer.current.offsetTop;
          } else {
            if (window.pageYOffset > refOffset) {
              setStick(true);
            } else {
              setStick(false);
            }
          }
        });
      }
    }
  }, [refContainer]);

  return (
    <Container stick={stick} ref={refContainer}>
      {props.children}
    </Container>
  );
}

StickyBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};
