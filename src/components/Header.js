import React from "react";
import { NavBar, Menu, NavBarItem } from "./common/NavBar";
import scrollNavigation from "../helpers/scrollNavigation";

export default function Header() {
  return (
    <NavBar
      maxWidth="1500px"
      breakpoint={760}
      className="demo_advertorial__header"
      fixed={true}
      offset={68}
    >
      <NavBarItem>
        <img
          src="http://localhost:8080/images/catalyst.svg"
          alt="CNBC Catalyst"
        />
      </NavBarItem>
      <Menu
        data={[
          {
            label: "About",
            link: {
              href: "#/about",
              onClick: () => scrollNavigation("#/about", 68),
            },
          },
          {
            label: "Strategy",
            link: {
              href: "#/strategy",
              onClick: () => scrollNavigation("#/strategy", 68),
            },
          },
          {
            label: "Case of Studies",
            link: {
              href: "#/case-of-studies",
              onClick: () => scrollNavigation("#/case-of-studies", 68),
            },
          },
        ]}
      />
    </NavBar>
  );
}
