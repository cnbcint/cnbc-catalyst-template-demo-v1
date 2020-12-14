import React from "react";
import Highlighted from "../Highlighted";
import Main from "../Main";
import { render } from "@testing-library/react";
import "jest-styled-components";

const Theme = {
  maxWidth: "900px",
  colors: {
    primary: "orange",
    secondary: "green",
    tertiary: "orange",
    background: "white",
    copy: "black",
    links: "blue",
  },
};
beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});

describe("Highlighted", () => {
  it("Renders correctly", () => {
    const { container } = render(
      <Main {...Theme}>
        <Highlighted>Testing Content</Highlighted>
      </Main>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the correct content", () => {
    const { container } = render(
      <Main {...Theme}>
        <Highlighted>Testing Content</Highlighted>
      </Main>
    );
    expect(container.firstChild.textContent).toMatch("Testing Content");
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
