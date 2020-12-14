/* eslint react/jsx-no-target-blank:0*/
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../helpers/Layout";
const Container = styled.div`
  background-color: #003e75;
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
  border-bottom: ${(props) => (props.selected ? "4px solid #38aae1" : "none")};

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
    color: ${(props) => (props.selected ? "#38aae1" : "white")};
    @media (min-width: ${breakpoints.mobile}) {
      color: white !important;
    }
    text-decoration: none;
    &:hover {
      color: #38aae1 !important;
    }
  }
`;

export default function Menu() {
  const [currentHash, setCurrentHash] = useState(null);
  useEffect(() => {
    window.addEventListener(
      "hashchange",
      () => {
        setCurrentHash(location.hash);
      },
      false
    );
  }, []);
  return (
    <Container>
      <List>
        <Item selected={currentHash === "#a-costumer-first-approach"}>
          <a href="#section1">Lore Ipsum Setion 1</a>
        </Item>
        <Item selected={currentHash === "#levarage-advance-tech"}>
          <a href="#section2">Lore Ipsum Setion 2</a>
        </Item>
        <Item selected={currentHash === "#extend-your-trust-advantage"}>
          <a href="#section3">Lore Ipsum Setion 3</a>
        </Item>
      </List>
    </Container>
  );
}
