import React from "react";
import Text from "../Text";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { css } from "styled-components";

describe("Text", () => {
  it("Renders correctly", () => {
    const { container } = render(<Text>Testing Content</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders correctly dropCap", () => {
    const { container } = render(<Text dropCap>Testing Content</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders correctly highlighted", () => {
    const { container } = render(<Text highlight>Testing Content</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the correct content", () => {
    const { container } = render(<Text>Testing Content</Text>);
    expect(container.firstChild.textContent).toMatch("Testing Content");
  });

  it("Passes the class name", () => {
    const { container } = render(
      <Text className="testClass">Testing Title</Text>
    );
    expect(container.firstChild.classList.contains("testClass")).toBe(true);
  });

  it("Set The right Color", () => {
    const { container } = render(<Text color="blue">Testing Title</Text>);
    expect(container.firstChild).toHaveStyleRule("color", "blue");
  });

  it("Set The right dropcap color", () => {
    const { container } = render(
      <Text dropCap dropCapColor="blue">
        Testing Title
      </Text>
    );
    expect(container.firstChild).toHaveStyleRule("color", "blue", {
      modifier: css`&::first-letter`,
    });
  });
});
