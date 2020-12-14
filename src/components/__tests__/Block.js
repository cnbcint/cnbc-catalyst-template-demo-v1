import React from "react";
import Block from "../Block";
import { render } from "@testing-library/react";
import "jest-styled-components";

const Component = () => (
  <Block
    className="testClass"
    style={{ backgroundColor: "rgb(255, 255, 255)" }}
  >
    Testing Content
  </Block>
);

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});

describe("Block", () => {
  it("Renders correctly", () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the correct content", () => {
    const { container } = render(<Component />);
    expect(container.firstChild.textContent).toMatch("Testing Content");
  });

  it("Passes the class name", () => {
    const { container } = render(<Component />);
    expect(container.firstChild.classList.contains("testClass")).toBe(true);
  });

  it("Passes the style", () => {
    const { container } = render(<Component />);
    expect(container.firstChild.style["background-color"]).toBe(
      "rgb(255, 255, 255)"
    );
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
