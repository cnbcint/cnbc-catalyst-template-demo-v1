import React from "react";
import Modal, { ModalController } from "../Modal";
import { render } from "@testing-library/react";

import "jest-styled-components";

const Component = () => (
  <>
    <Modal className="test" id="modal1">
      Testing Content
    </Modal>
    <ModalController modalID="modal1" className="test__open">
      Open Modal 1
    </ModalController>
  </>
);

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {
      return null;
    }
    disconnect() {}
  };
});

describe("Modal", () => {
  it("Renders correctly", () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the correct content", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test__content")[0]
      .textContent;

    expect(target).toMatch("Testing Content");
  });

  it("Renders the open modal button", () => {
    const { container } = render(<Component />);
    const target = container.getElementsByClassName("test__open")[0]
      .textContent;

    expect(target).toMatch("Open Modal 1");
  });

  it("Opens and closes the modal", () => {
    const { container } = render(<Component />);
    const openButton = container.getElementsByClassName("test__open")[0];
    openButton.click();
    const target = container.getElementsByClassName("test")[0];
    expect(target).toHaveStyleRule("display", "flex");

    const closeButton = container.getElementsByClassName("test__close")[0];
    closeButton.click();
    expect(target).toHaveStyleRule("display", "none");
  });

  it("Passes the class name", () => {
    const { container } = render(<Component />);
    expect(container.firstChild.classList.contains("test")).toBe(true);
  });
});

afterAll(() => {
  window.IntersectionObserver = null;
});
