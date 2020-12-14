import React from "react";
import Quote from "../Quote";
import { render } from "@testing-library/react";
import "jest-styled-components";

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});
describe("Quote", () => {
  it("Renders correctly", () => {
    const { container } = render(<Quote>Testing Content</Quote>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders correctly with no deviders", () => {
    const { container } = render(
      <Quote addDeviders={false}>Testing Content</Quote>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the correct content", () => {
    const { container } = render(<Quote>Testing Content</Quote>);
    expect(container.firstChild.textContent).toMatch("Testing Content");
  });

  it("Passes the class name", () => {
    const { container } = render(
      <Quote className="testClass">Testing Content</Quote>
    );
    expect(container.firstChild.classList.contains("testClass")).toBe(true);
  });

  it("Set The right aligment", () => {
    const { container } = render(<Quote aligment="right">Testing Title</Quote>);
    expect(container.firstChild).toHaveStyleRule("text-align", "right");
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
