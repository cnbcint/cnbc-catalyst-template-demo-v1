import React from "react";
import { render } from "@testing-library/react";
import { css } from "styled-components";
import Main from "../Main";
import "jest-styled-components";

describe("Main", () => {
  it("Renders", async () => {
    const { container } = await render(<Main>Content</Main>);
    expect(container).toMatchSnapshot();
  });

  it("Children is rendered", async () => {
    const { container } = await render(<Main>Test Content</Main>);
    expect(container.firstChild.textContent).toMatch("Test Content");
  });

  it("Class name is added ", async () => {
    const { container } = await render(<Main className="test">Content</Main>);
    expect(container.firstChild.className).toContain("test");
  });

  it("Styles are added ", async () => {
    const { container } = await render(
      <Main style={{ backgroundColor: "red" }}>Content</Main>
    );
    expect(container.firstChild.style["background-color"]).toMatch("red");
  });

  it("CSS styles check", async () => {
    const { container } = await render(
      <Main colors={{ copy: "red", background: "gray" }}>
        <p id="testp">Content</p>
      </Main>
    );
    expect(container.firstChild).toHaveStyleRule("width", "100%");
    expect(container.firstChild).toHaveStyleRule("background-color", "gray");
    expect(container.firstChild).toHaveStyleRule("color", "red", {
      modifier: css`> *`,
    });
  });
});
