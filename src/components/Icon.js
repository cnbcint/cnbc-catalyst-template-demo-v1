import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Container = styled.span`
  .ion-icon {
    color: ${(props) => props.iconColor};
  }
`;
const Variants = { filled: "", outline: "-outline", sharp: "-sharp" };
/**
 * Wrapper for Ionic Icons more info at https://ionicons.com/
 */
export default function Icon(props) {
  return (
    <Container iconColor={props.color}>
      <ion-icon
        class="ion-icon"
        name={props.name + Variants[props.variant]}
        size={props.size}
      ></ion-icon>
    </Container>
  );
}
Icon.defaultProps = {
  variant: "filled",
  size: "small",
  color: "inherit",
};

Icon.propTypes = {
  /**
   * Icon Name see https://ionicons.com/ for details
   */
  name: PropTypes.string.isRequired,
  /**
   * Icon type
   */
  variant: PropTypes.oneOf(["filled", "outline", "sharp"]),
  /**
   * Icon size
   */
  size: PropTypes.oneOf(["small", "large"]),
  /**
   * Icon color
   */
  color: PropTypes.string,
};
