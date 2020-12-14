import React from "react";
import ArticleItem from "../ArticleItem";
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
const testProps = {
  title: "Test Title",
  copy: "Test copy",
  image: "images/test.jpg",
  link: "http://www.test.com",
};

describe("ArticleItem", () => {
  it("Renders correctly", () => {
    const { container } = render(
      <Main {...Theme}>
        <ArticleItem {...testProps} />
      </Main>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("has an img with the correct source", () => {
    const { container } = render(
      <Main {...Theme}>
        <ArticleItem {...testProps} />
      </Main>
    );
    expect(container.querySelector("img").src).toMatch(
      "http://localhost/images/test.jpg"
    );
  });
  it("has an img with the correct title", () => {
    const { container } = render(
      <Main {...Theme}>
        <ArticleItem {...testProps} />
      </Main>
    );
    expect(container.querySelector("h5").textContent).toMatch("Test Title");
  });
  it("has an img with the correct copy", () => {
    const { container } = render(
      <Main {...Theme}>
        <ArticleItem {...testProps} />
      </Main>
    );
    expect(container.querySelector("p").textContent).toMatch("Test copy");
  });

  it("has an img with the correct link", () => {
    const { container } = render(
      <Main {...Theme}>
        <ArticleItem {...testProps} />
      </Main>
    );
    expect(container.querySelector("a").href).toMatch("http://www.test.com");
  });
});
