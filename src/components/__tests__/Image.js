import React from "react";
import Image from "../Image";
import { render } from "@testing-library/react";
import "jest-styled-components";

const testProps = {
  source: {
    desktop:
      "http://localhost:8080/images/responsive/output/image05-desktop.jpg",
    tablet: "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
    mobile: "http://localhost:8080/images/responsive/output/image05-mobile.jpg",
  },
  alt: "Alt Text Test",
};

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});

describe("Image", () => {
  it("Renders correctly", () => {
    const { container } = render(<Image {...testProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders an img with default mobile source", () => {
    const { container } = render(<Image {...testProps} />);
    expect(container.querySelector("img").src).toMatch(
      "http://localhost:8080/images/responsive/output/image05-mobile.jpg"
    );
  });

  it("Renders img alt text", () => {
    const { container } = render(<Image {...testProps} />);
    expect(container.querySelector("img").alt).toMatch("Alt Text Test");
  });

  it("image is lazy load enable", () => {
    const { container } = render(<Image {...testProps} />);
    expect(container.querySelector("img").getAttribute("loading")).toMatch(
      "lazy"
    );
  });

  it("Add sources for desktop and tablet", () => {
    const { container } = render(<Image {...testProps} />);
    expect(container.querySelectorAll("source")[0].srcset).toMatch(
      "http://localhost:8080/images/responsive/output/image05-desktop.jpg"
    );
    expect(container.querySelectorAll("source")[1].srcset).toMatch(
      "http://localhost:8080/images/responsive/output/image05-tablet.jpg"
    );
  });

  it("Sources has the correct media queries for tablet and desktop", () => {
    const { container } = render(<Image {...testProps} />);
    expect(container.querySelectorAll("source")[0].media).toMatch(
      "(min-width:1280px)"
    );
    expect(container.querySelectorAll("source")[1].media).toMatch(
      "(min-width:768px)"
    );
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
