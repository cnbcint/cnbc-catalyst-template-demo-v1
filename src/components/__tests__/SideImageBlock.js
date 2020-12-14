import React from "react";
import SideImageBlock from "../SideImageBlock";
import Text from "../Text";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { breakpoints } from "../../helpers/Layout";

const Component = () => (
  <SideImageBlock
    imageBlockPosition="right"
    imageBlockWidth="70%"
    contentMaxWidth="400px"
    contentBackgroundColor="#ccc"
    style={{ marginBottom: 0 }}
    className="test"
    image={{
      desktop:
        "http://localhost:8080/images/responsive/output/image05-desktop.jpg",
      tablet:
        "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
      mobile:
        "http://localhost:8080/images/responsive/output/image05-mobile.jpg",
    }}
  >
    <Text>Testing content</Text>
  </SideImageBlock>
);

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});

describe("SideImageBlock", () => {
  it("Renders correctly", () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders an img with default mobile source", () => {
    const { container } = render(<Component />);
    expect(container.querySelector("img").src).toMatch(
      "http://localhost:8080/images/responsive/output/image05-mobile.jpg"
    );
  });

  it("Add sources for desktop and tablet", () => {
    const { container } = render(<Component />);
    expect(container.querySelectorAll("source")[0].srcset).toMatch(
      "http://localhost:8080/images/responsive/output/image05-desktop.jpg"
    );
    expect(container.querySelectorAll("source")[1].srcset).toMatch(
      "http://localhost:8080/images/responsive/output/image05-tablet.jpg"
    );
  });

  it("Sources has the correct media queries for tablet and desktop", () => {
    const { container } = render(<Component />);
    expect(container.querySelectorAll("source")[0].media).toMatch(
      "(min-width:1280px)"
    );
    expect(container.querySelectorAll("source")[1].media).toMatch(
      "(min-width:768px)"
    );
  });

  it("Renders the correct content", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName(
      "test__content_container"
    )[0];
    expect(target.firstChild.textContent).toMatch("Testing content");
  });

  it("Sets the correct background color", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test__content_block")[0];
    expect(target).toHaveStyleRule("background-color", "#ccc");
  });

  it("Sets the correct image width", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test__image_container")[0];
    expect(target).toHaveStyleRule("width", "70%", {
      media: `(min-width:${breakpoints.mobile})`,
    });
  });

  it("Sets the correct alignment", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test")[0];
    expect(target).toHaveStyleRule("flex-direction", "row-reverse", {
      media: `(min-width:${breakpoints.mobile})`,
    });
  });

  it("Passes the class name", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test")[0];
    expect(target.classList.contains("test")).toBe(true);
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
