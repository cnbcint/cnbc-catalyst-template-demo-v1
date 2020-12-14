import React from "react";
import FlexList from "../FlexList";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { css } from "styled-components";

describe("FlexList", () => {
  it("Renders correctly", () => {
    const { container } = render(
      <FlexList>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </FlexList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("has the correct media queries for default", () => {
    const { container } = render(
      <FlexList>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </FlexList>
    );
    expect(container.firstChild).toHaveStyleRule("width", "calc(100% - 2rem)", {
      modifier: css`> div`,
    });
    expect(container.firstChild).toHaveStyleRule("width", "calc(50% - 2rem)", {
      media: `(min-width:768px)`,
      modifier: css`> div`,
    });
    expect(container.firstChild).toHaveStyleRule(
      "width",
      "calc(33.333333333333336% - 2rem)",
      {
        media: `(min-width:1280px)`,
        modifier: css`> div`,
      }
    );
  });
  it("generates the correct media queries based on columns props", () => {
    const { container } = render(
      <FlexList columns={{ mobile: 1, tablet: 2, desktop: 4 }}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </FlexList>
    );
    expect(container.firstChild).toHaveStyleRule("width", "calc(100% - 2rem)", {
      modifier: css`> div`,
    });
    expect(container.firstChild).toHaveStyleRule("width", "calc(50% - 2rem)", {
      media: `(min-width:768px)`,
      modifier: css`> div`,
    });
    expect(container.firstChild).toHaveStyleRule("width", "calc(25% - 2rem)", {
      media: `(min-width:1280px)`,
      modifier: css`> div`,
    });
  });
});
