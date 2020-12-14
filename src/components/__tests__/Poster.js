import React from "react";
import Poster from "../Poster";
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

const Component = () => (
  <Main {...Theme}>
    <Poster
      image={{
        desktop:
          "http://localhost:8080/images/responsive/output/image05-desktop.jpg",
        tablet:
          "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
        mobile:
          "http://localhost:8080/images/responsive/output/image05-mobile.jpg",
      }}
      aligment="right"
      className="test"
    >
      Testing Content
    </Poster>
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
describe("Poster", () => {
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
    expect(
      container.getElementsByClassName("test__content")[0].textContent
    ).toMatch("Testing Content");
  });

  it("Renders correctly with no dividers", () => {
    const { container } = render(<Component addDivider={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Passes the class name", () => {
    const { container } = render(<Component />);
    expect(container.firstChild.firstChild.classList.contains("test")).toBe(
      true
    );
  });

  it("Set The right aligment", () => {
    const { container } = render(<Component />);
    expect(
      container.getElementsByClassName("test__content")[0]
    ).toHaveStyleRule("text-align", "right");
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
