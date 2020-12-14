import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { LayoutContext } from "./Main";
import { getMargin } from "../helpers/Layout";
import useAnimation from "../hooks/useAnimation";

const Container = styled.div`
  font-weight: bold;
  font-size: 110%;
`;
const Divider = styled.hr`
  margin: ${getMargin(1)} 0;
  border-color: ${(props) => props.color};
`;

export default function Highlighted(props) {
  const layout = useContext(LayoutContext);
  const { ref: refDevider } = useAnimation({
    animationName: "fadeIn",
    duration: 500,
    delay: 125,
    loop: true,
    autoStart: true,
  });
  const { ref: refContent } = useAnimation({
    animationName: "fadeInLeft",
    duration: 500,
    delay: 0,
    loop: true,
    autoStart: true,
  });
  return (
    <Container className={props.className} style={props.style}>
      <div ref={refContent}>{props.children}</div>
      <Divider ref={refDevider} color={layout.colors[props.dividerColor]} />
    </Container>
  );
}

Highlighted.defaultProps = {
  dividerColor: "primary",
  className: "",
  style: {},
};
Highlighted.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  style: PropTypes.object,
  dividerColor: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};
