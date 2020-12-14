import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getJustifyContent } from "../helpers/Layout";

const Container = styled.div`
  .gig-bar-container {
    display: flex;
    justify-content: ${(props) => getJustifyContent(props.aligment)};
    width: 100%;
  }
  .tabbing-button {
    display: none;
  }
  td#social_bar-reaction0-icon,
  td#social_bar-reaction1-icon,
  td#social_bar-reaction2-icon,
  td#social_bar-reaction3-icon,
  td#social_bar-reaction4-icon {
    background: ${(props) => props.buttonColor} !important;
  }
  .gig-button-container table tr td,
  .gig-button-container table tr th {
    color: ${(props) => props.iconColor} !important;
  }
  .gig-share-button {
    cursor: pointer;
  }
`;
/**
 * Add CNBC Gigya Social Share. This component will not work on preview or storybook will only display icons.
 * Once uploaded to carbon the functionality will be enabled.
 */
const SocialShare = (props) => {
  return (
    <Container
      className={props.className}
      buttonColor={props.buttonColor}
      iconColor={props.iconColor}
      aligment={props.aligment}
    >
      <div id="social_bar" className="gigyasharebar"></div>
    </Container>
  );
};

SocialShare.defaultProps = {
  buttonColor: "auto",
  iconColor: "white",
  className: "",
  aligment: "left",
};
SocialShare.propTypes = {
  buttonColor: PropTypes.string,
  iconColor: PropTypes.string,
  className: PropTypes.string,
  aligment: PropTypes.oneOf(["left", "center", "right"]),
};
export default SocialShare;
