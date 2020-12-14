import React from "react";

import Title from "../Title";

export default {
  title: "Catalyst/Title",
  component: Title,
  argTypes: {
    color: { control: "color" },
  },
};
const Template = (args) => <Title {...args} />;
export const Example = Template.bind({});
Example.args = {
  children: "This is an example title",
};
