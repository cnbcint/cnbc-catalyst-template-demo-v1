import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Main from "../Main";
import LeftSideBlock from "../LeftSideBlock";
import Text from "../Text";
import Highlighted from "../Highlighted";

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
const Component = () => (
  <Main {...Theme}>
    <LeftSideBlock
      style={{ color: "red" }}
      className="test"
      sideContent={() => <Highlighted>Testing side content</Highlighted>}
    >
      <Text>Testing content</Text>
    </LeftSideBlock>
  </Main>
);

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});

describe("LeftSideBlock", () => {
  it("Renders", () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });

  it("Renders the side content", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test__side")[0];
    expect(target.firstChild.firstChild.textContent).toMatch(
      "Testing side content"
    );
  });

  it("Renders the correct content", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test__content")[0];
    expect(target.firstChild.textContent).toMatch("Testing content");
  });

  it("Passes the class name", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test")[0];
    expect(target.classList.contains("test")).toBe(true);
  });

  it("Passes the style", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test")[0];

    expect(target.style["color"]).toBe("red");
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
