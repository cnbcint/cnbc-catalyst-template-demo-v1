/* eslint react/display-name: 0 */
import React from "react";
import Icon from "../Icon";
import { render } from "@testing-library/react";
import "jest-styled-components";

describe("Icon", () => {
  it("Renders correctly", () => {
    const { container } = render(<Icon name="heart" variant="outline" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Add the right color", () => {
    const { container } = render(
      <Icon name="heart" variant="outline" color="blue" />
    );
    expect(container.firstChild).toHaveStyleRule("color", "blue", {
      modifier: ".ion-icon ",
    });
  });
});
