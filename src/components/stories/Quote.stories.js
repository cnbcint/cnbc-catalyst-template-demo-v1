import React from "react";

import Quote from "../Quote";

export default {
  title: "Catalyst/Quote",
  component: Quote,
  argTypes: {
    dividerColor: { control: "color" },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => <Quote {...args} />;
export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo{" "}
      <strong>ligula eget dolor.</strong> Aenean massa.
      <small>Lore Ipsum Guy</small>
    </>
  ),
  style: { maxWidth: "900px" },
};
