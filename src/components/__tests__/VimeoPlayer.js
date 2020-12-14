import React from "react";
import VimeoPlayer from "../VimeoPlayer";
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
    <VimeoPlayer
      className="VimeoPlayerTest"
      overlay
      overlayColor="rgba(0, 0, 0, 0.5)"
      videoID="468693933"
      coverImage="http://localhost:8080/images/header-desktop.jpg"
      background
      autoplayLoad
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

describe("VimeoPlayer", () => {
  it("Renders correctly", () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders a video", () => {
    const { container } = render(<Component />);
    const iframe = container.getElementsByTagName("iframe")[0];
    const src = iframe.getAttribute("src");
    expect(src).toContain("https://player.vimeo.com/video/468693933");
  });

  it("Renders a cover image", () => {
    const { container } = render(<Component />);

    const coverImage = container.getElementsByClassName(
      "VimeoPlayerTest__cover"
    )[0];

    expect(coverImage.style["background-image"]).toBe(
      "url(http://localhost:8080/images/header-desktop.jpg)"
    );
  });

  it("Renders the overlay with the correct color", () => {
    const { container } = render(<Component />);

    const overlay = container.getElementsByClassName(
      "VimeoPlayerTest__overlay"
    )[0];
    expect(overlay.style["background-color"]).toBe("rgba(0, 0, 0, 0.5)");
  });

  it("Sends parameter background", () => {
    const { container } = render(<Component />);
    const iframe = container.getElementsByTagName("iframe")[0];
    const src = iframe.getAttribute("src");
    expect(src).toContain("background=1");
  });

  it("Sends parameter autoplay", () => {
    const { container } = render(<Component />);
    const iframe = container.getElementsByTagName("iframe")[0];
    const src = iframe.getAttribute("src");
    expect(src).toContain("autoplay=1");
  });

  it("Adds classNames ", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("VimeoPlayerTest")[0];
    expect(target.classList.contains("VimeoPlayerTest")).toBe(true);
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
