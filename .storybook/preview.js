import React from "react";
import "!style-loader!css-loader!sass-loader!../src/scss/index.scss";
import Main from "../src/components/Main";
import Theme from "../src/Theme.json";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
const widthMain = (Story, context) => {
  return (
    <Main {...Theme}>
      <Story {...context} />
    </Main>
  );
};
export const decorators = [widthMain];
