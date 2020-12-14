/* eslint react/display-name:0 */

import React from "react";

import SimpleBoilerPlate from "../SimpleBoilerPlate";

export default {
  title: "Catalyst/SimpleBoilerPlate",
  component: SimpleBoilerPlate,
  argTypes: {
    copyColor: { control: "color" },
    backgroundColor: { control: "color" },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => <SimpleBoilerPlate {...args} />;
export const Example = Template.bind({});
Example.args = {
  companyLogoURL: "/images/catalyst_logo_black.svg",
  title: "Lorem ipsum dolor sit amet",
  ctaText: "Find out more",
  copy: () => (
    <>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo{" "}
      <strong>ligula eget dolor.</strong> Aenean massa.
      <small>Lore Ipsum Guy</small>
    </>
  ),
  style: { maxWidth: "500px" },
  ctaLink: "https://www.cnbc.com",
};
