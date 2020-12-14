import React from "react";
import Columns from "../Columns";
import Image from "../Image";
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

describe("Columns", () => {
  it("Renders correctly", () => {
    const { container } = render(
      <Columns>
        <Image
          source={{
            desktop:
              "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/image05-mobile.jpg",
          }}
          alt="Alt Text"
        />
        <Image
          source={{
            desktop:
              "http://localhost:8080/images/responsive/output/image06-tablet.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/image06-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/image06-mobile.jpg",
          }}
          alt="Alt Text"
        />
      </Columns>
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders correctly with 2 columns", () => {
    const { container } = render(
      <Columns>
        <Image
          source={{
            desktop:
              "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/image05-mobile.jpg",
          }}
          alt="Alt Text"
        />
        <Image
          source={{
            desktop:
              "http://localhost:8080/images/responsive/output/image06-tablet.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/image06-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/image06-mobile.jpg",
          }}
          alt="Alt Text"
        />
      </Columns>
    );
    expect(container.getElementsByTagName("img").length).toBe(2);
  });
});

it("Has flex css property", () => {
  const { container } = render(
    <Columns>
      <Image
        source={{
          desktop:
            "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
          tablet:
            "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
          mobile:
            "http://localhost:8080/images/responsive/output/image05-mobile.jpg",
        }}
        alt="Alt Text"
      />
      <Image
        source={{
          desktop:
            "http://localhost:8080/images/responsive/output/image06-tablet.jpg",
          tablet:
            "http://localhost:8080/images/responsive/output/image06-tablet.jpg",
          mobile:
            "http://localhost:8080/images/responsive/output/image06-mobile.jpg",
        }}
        alt="Alt Text"
      />
    </Columns>
  );
  expect(container.firstChild).toHaveStyleRule("display", "flex");
});

it("Has flex-direction column css property", () => {
  const { container } = render(
    <Columns>
      <Image
        source={{
          desktop:
            "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
          tablet:
            "http://localhost:8080/images/responsive/output/image05-tablet.jpg",
          mobile:
            "http://localhost:8080/images/responsive/output/image05-mobile.jpg",
        }}
        alt="Alt Text"
      />
      <Image
        source={{
          desktop:
            "http://localhost:8080/images/responsive/output/image06-tablet.jpg",
          tablet:
            "http://localhost:8080/images/responsive/output/image06-tablet.jpg",
          mobile:
            "http://localhost:8080/images/responsive/output/image06-mobile.jpg",
        }}
        alt="Alt Text"
      />
    </Columns>
  );
  expect(container.firstChild).toHaveStyleRule("flex-direction", "column");
});

afterAll(() => {
  window.IntersectionObserver = null;
});
