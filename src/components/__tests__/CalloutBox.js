/* eslint react/display-name: 0 */
import React from "react";
import CalloutBox from "../CalloutBox";
import { render } from "@testing-library/react";
import "jest-styled-components";

const testProps = {
  fullname: "Jimmy Fallon",
  profilePicURL: "http://localhost:8080/images/jimmy_fallon.jpg",
  position: "Position",
  company: "NBC Universal",
  copy: () => (
    <>
      “Lorem ipsum dolor sit amet, aster si consectetur adipiscing elit. Donec
      malesuada blandit diam vel pharetra. Maecenas in bibendum sapien, eu di
      iaculis ligula. Duis tempor diam ex, non fringilla nibh faucibus et”
    </>
  ),
};
describe("CalloutBox", () => {
  it("Renders correctly", () => {
    const { container } = render(<CalloutBox {...testProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
