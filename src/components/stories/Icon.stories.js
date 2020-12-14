import React from "react";

import Icon from "../Icon";

export default {
  title: "Catalyst/Icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
  },
};
const Template = (args) => <Icon {...args} />;
export const Example = Template.bind({});
Example.args = {
  name: "heart",
  color: "#000",
  size: "large",
};
