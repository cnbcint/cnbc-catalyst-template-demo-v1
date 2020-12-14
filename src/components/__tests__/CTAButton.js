import React from "react";
import CTAButton from "../CTAButton";
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

describe("CTAButton", () => {
  it("Renders correctly", () => {
    const { container } = render(
      <Main {...Theme}>
        <CTAButton link="http://test.comu">Testing Content</CTAButton>
      </Main>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the correct content", () => {
    const { container } = render(
      <Main {...Theme}>
        <CTAButton link="http://test.comu">Testing Content</CTAButton>
      </Main>
    );
    expect(container.firstChild.textContent).toMatch("Testing Content");
  });

  it("Passes the class name", () => {
    const { container } = render(
      <Main {...Theme}>
        <CTAButton className="testClass" link="http://test.comu">
          Testing Content
        </CTAButton>
      </Main>
    );
    expect(
      container.firstChild.firstChild.classList.contains("testClass")
    ).toBe(true);
  });
});
