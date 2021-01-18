import React from "react";
import { render } from "@testing-library/react";
import { css } from "styled-components";
import "jest-styled-components";
import Main from "../Main";
import SimpleHero from "../SimpleHero";
import { breakpoints, getJustifyContent } from "../../helpers/Layout";

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
    <SimpleHero
      title={() => "A title"}
      subTitle="A sub title"
      copy={() => <p>A tagline</p>}
      companyLogoURL="http://localhost:8080/images/catalyst.svg"
      companyLogoAligment="right"
      copyAligment="center"
      copyMinWidth="640px"
      copyMaxWidth="1280px"
      copyColor="red"
      backgroundImage={{
        desktop: "http://localhost:8080/images/header-desktop.jpg",
        tablet: "http://localhost:8080/images/header-tablet.jpg",
        mobile: "http://localhost:8080/images/header-mobile.jpg",
      }}
      videoId="468693933"
      videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
      addScrollIndicator={true}
      addDivider={true}
      dividerColor="secondary"
      overlayColor="rgba(0,0,0,.5)"
      className="test"
    />
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

describe("SimpleHero", () => {
  it("Renders", () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });

  it("Renders the overlay with the correct color", () => {
    const { container } = render(<Component />);

    const target = container.getElementsByClassName("test__overlay")[0];
    expect(target).toHaveStyleRule("background", "rgba(0,0,0,.5)");
  });

  it("Renders the background image", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test")[0];

    expect(target).toHaveStyleRule(
      "background-image",
      "url(http://localhost:8080/images/header-mobile.jpg)"
    );
  });

  it("Renders the background video", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test__video")[0];
    const iframe = target.getElementsByTagName("iframe")[0];
    const src = iframe.getAttribute("src");
    expect(src).toContain("https://player.vimeo.com/video/468693933");
  });

  it("Renders the logo", () => {
    const { container } = render(<Component />);

    const logo = container.getElementsByTagName("img")[0];
    const src = logo.getAttribute("src");
    expect(src).toMatch("http://localhost:8080/images/catalyst.svg");
  });

  it("Logo has alignment style", () => {
    const { container } = render(<Component />);

    const logo = container.getElementsByTagName("img");
    const logoContainer = logo[0].parentElement;
    expect(logoContainer).toHaveStyleRule(
      "justify-content",
      getJustifyContent("right")
    );
  });

  it("Renders the title", () => {
    const { container } = render(<Component />);

    const h1 = container.getElementsByTagName("h1")[0];
    expect(h1.textContent).toMatch("A title");
  });

  it("Renders the sub title", () => {
    const { container } = render(<Component />);

    const h2 = container.getElementsByTagName("h2")[0];
    expect(h2.textContent).toMatch("A sub title");
  });

  it("Renders the copy", () => {
    const { container } = render(<Component />);

    const p = container.getElementsByTagName("p")[0];
    expect(p.textContent).toMatch("A tagline");
  });

  // it("Renders the divider with the correct color", () => {
  //   const { container } = render(<Component />);

  //   const divider = container.getElementsByTagName("hr")[0];
  //   expect(divider).toHaveStyleRule(
  //     "border-color",
  //     `${Theme.colors["secondary"]} !important`
  //   );
  // });

  it("Adds classNames ", () => {
    const { container } = render(<Component />);

    const target = container.getElementsByClassName("test")[0];
    expect(target.classList.contains("test")).toBe(true);
  });

  it("Copy has color style", () => {
    const { container } = render(<Component />);

    const copy = container.getElementsByClassName("test__content");
    expect(copy[0]).toHaveStyleRule("color", "red", {
      modifier: css`> *`,
    });
  });

  it("Copy has alignment style", () => {
    const { container } = render(<Component />);

    const copy = container.getElementsByClassName("test__content");
    expect(copy[0]).toHaveStyleRule("text-align", "center", {
      modifier: css`> *`,
    });
  });

  it("Copy has min-width style", () => {
    const { container } = render(<Component />);

    const copy = container.getElementsByClassName("test__content");
    expect(copy[0]).toHaveStyleRule("min-width", "640px", {
      media: `(min-width:${breakpoints.mobile})`,
    });
  });

  it("Copy has max-width style", () => {
    const { container } = render(<Component />);

    const copy = container.getElementsByClassName("test__content");
    expect(copy[0]).toHaveStyleRule("max-width", "1280px", {
      media: `(min-width:${breakpoints.mobile})`,
    });
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
