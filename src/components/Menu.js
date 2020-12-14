/* eslint react/jsx-no-target-blank:0*/
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "../helpers/Layout";
import { navigateTo, useHashNav } from "./Section";
const Container = styled.div`
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 1px 3px 0px black;
  ul {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    li {
      margin: 0 !important;
    }
  }
`;
const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const Item = styled.li`
  display: block;
  text-transform: uppercase;

  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.selected
      ? "4px solid " + props.primaryColor
      : "4px solid transparent"};

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 75%;
  line-height: 100%;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5em !important;
  padding-left: 2rem;

  @media (min-width: ${breakpoints.mobile}) {
    padding-top: 1rem;
    padding-bottom: 1em;
    padding-left: 0;
    font-size: 80%;
    line-height: 120%;
    border-top: 1px solid transparent;
    text-align: center;
    max-width: 200px;
  }
  a {
    cursor: pointer;
    color: ${(props) =>
      props.selected ? props.primaryColor : props.fontColor};
    @media (min-width: ${breakpoints.mobile}) {
      color: ${(props) => props.fontColor} !important;
    }
    text-decoration: none;
    &:hover {
      color: ${(props) => props.primaryColor} !important;
    }
  }
`;

export default function Menu(props) {
  const currentHash = useHashNav();

  return (
    <Container backgroundColor={props.backgroundColor}>
      <List>
        {props.sections.map((s, i) => {
          return (
            <Item
              fontColor={props.fontColor}
              primaryColor={props.primaryColor}
              key={"section_" + i}
              selected={currentHash === "#" + s.path}
            >
              <a onClick={() => navigateTo(s.path)}>{s.label}</a>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

Menu.defaultProps = {
  backgroundColor: "#333",
  fontColor: "white",
  primaryColor: "red",
};

Menu.propTypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  primaryColor: PropTypes.string,
  sections: PropTypes.array.isRequired,
};
