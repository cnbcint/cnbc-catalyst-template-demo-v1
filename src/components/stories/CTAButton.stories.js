import React from "react";

import CTAButton from "../CTAButton";

export default {
  title: "Catalyst/CTAButton",
  component: CTAButton,
};
const Template = (args) => <CTAButton {...args} />;
export const Example = Template.bind({});
Example.args = {
  children: "Find Out More",
  link: "https://www.cnbc.com",
};
