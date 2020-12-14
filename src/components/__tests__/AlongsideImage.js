import React from "react";
import AlongSideImage from "../AlongSideImage";
import Text from "../Text";
import { render } from "@testing-library/react";
import "jest-styled-components";

const Component = () => (
  <AlongSideImage
    position="right"
    image={{
      desktop:
        "http://localhost:8080/images/responsive/output/image02-desktop.jpg",
      tablet:
        "http://localhost:8080/images/responsive/output/image02-tablet.jpg",
      mobile:
        "http://localhost:8080/images/responsive/output/image02-mobile.jpg",
    }}
    alt="Test Image"
  >
    <Text>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus
      Bonorum et Malorum&quot; by Cicero are also reproduced in their exact
      original form, accompanied by English versions from the 1914 translation
      by H. Rackham.
    </Text>
  </AlongSideImage>
);

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});

describe("AlongSideImage", () => {
  it("Renders correctly", () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Image is rendered", () => {
    const { container } = render(<Component />);
    expect(container.getElementsByTagName("picture").length === 1).toBe(true);
  });

  it("Text is rendered", () => {
    const { container } = render(<Component />);
    expect(container.getElementsByTagName("p").length === 1).toBe(true);
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
