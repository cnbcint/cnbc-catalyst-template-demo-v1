import React from "react";
import ParallaxBackground from "../ParallaxBackground";
import Block from "../Block";
import Text from "../Text";
import { render } from "@testing-library/react";
import "jest-styled-components";

const Component = () => (
  <ParallaxBackground
    className="test"
    overlayColor="rgba(0,0,0,.5)"
    image={{
      desktop:
        "http://localhost:8080/images/responsive/output/image03-desktop.jpg",
      tablet:
        "http://localhost:8080/images/responsive/output/image03-tablet.jpg",
      mobile:
        "http://localhost:8080/images/responsive/output/image03-mobile.jpg",
    }}
  >
    <Block>
      <Text>Testing Content</Text>
    </Block>
  </ParallaxBackground>
);

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});
describe("ParallaxBackground", () => {
  it("Renders correctly", () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the overlay with the correct color", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test__overlay")[0];
    expect(target).toHaveStyleRule("background-color", "rgba(0,0,0,.5)");
  });

  it("Renders the background image", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test")[0];

    expect(target).toHaveStyleRule(
      "background-image",
      "url(http://localhost:8080/images/responsive/output/image03-mobile.jpg)"
    );
  });

  it("Renders the correct content", () => {
    const { container } = render(<Component />);
    expect(
      container.getElementsByClassName("test__content")[0].textContent
    ).toMatch("Testing Content");
  });

  it("Passes the class name", () => {
    const { container } = render(<Component />);
    expect(container.firstChild.classList.contains("test")).toBe(true);
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
