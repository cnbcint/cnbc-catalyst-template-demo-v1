import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "../helpers/Layout";
import { LayoutContext } from "./Main";

const Link = styled.a`
  color: ${(props) => props.colors.copy};
  padding: 0.5rem 3rem;
  display: block;
  text-align: center;
  background-color: ${(props) => props.colors.primary};
  @media (min-width: ${breakpoints.mobile}) {
    display: inline-block;
  }

  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.colors.secondary};
  }
`;
/**
 * Call To Action Button this element will use primary color from Theme.json and hover state secondary color from theme.json
 */
export default function CTAButton(props) {
  const layout = useContext(LayoutContext);

  return (
    <Link
      href={props.link}
      target={props.target}
      className={props.className}
      colors={layout.colors}
    >
      {props.children}
    </Link>
  );
}
CTAButton.defaultProps = {
  className: "",
};
CTAButton.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_self", "_blank"]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};
