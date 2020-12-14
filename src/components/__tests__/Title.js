import React from "react";
import Title from "../Title";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { css } from "styled-components";

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});

describe("Title", () => {
  it("Renders correctly", () => {
    const { container } = render(<Title>Testing Title</Title>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the correct content", () => {
    const { container } = render(<Title>Testing Title Content</Title>);
    expect(container.firstChild.textContent).toMatch("Testing Title Content");
  });

  it("Passes the class name", () => {
    const { container } = render(
      <Title className="testClass">Testing Title</Title>
    );
    expect(container.firstChild.classList.contains("testClass")).toBe(true);
  });

  it("Set The right Color", () => {
    const { container } = render(<Title color="blue">Testing Title</Title>);
    expect(container.firstChild).toHaveStyleRule("color", "blue", {
      modifier: css`> *`,
    });
  });

  it("Set The right aligment", () => {
    const { container } = render(<Title aligment="right">Testing Title</Title>);
    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: css`> *`,
    });
  });

  it("Renders the right element", () => {
    const { container } = render(
      <Title element="h4" color="blue">
        Testing Title
      </Title>
    );
    expect(container.firstChild.firstChild.tagName.toLowerCase()).toMatch("h4");
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
