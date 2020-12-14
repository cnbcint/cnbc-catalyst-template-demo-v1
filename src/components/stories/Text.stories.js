import React from "react";

import Text from "../Text";

export default {
  title: "Catalyst/Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
    dropCapColor: { control: "color" },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => <Text {...args} />;
export const SimpleText = Template.bind({});
SimpleText.args = {
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo{" "}
      <strong>ligula eget dolor.</strong> Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </>
  ),
  style: { maxWidth: "500px" },
};

export const DropcapText = Template.bind({});
DropcapText.args = {
  dropCap: true,
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo{" "}
      <strong>ligula eget dolor.</strong> Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </>
  ),
  style: { maxWidth: "500px" },
};

export const HighlightedText = Template.bind({});
HighlightedText.args = {
  highlight: true,
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo{" "}
      <strong>ligula eget dolor.</strong> Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </>
  ),
  style: { maxWidth: "500px" },
};
