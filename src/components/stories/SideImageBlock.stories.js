import React from "react";

import SideImageBlock from "../SideImageBlock";
import Text from "../Text";

export default {
  title: "Catalyst/SideImageBlock",
  component: SideImageBlock,

  argTypes: {
    contentBackgroundColor: { control: "color" },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => (
  <SideImageBlock {...args}>
    <Text>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus
      Bonorum et Malorum&quot; by Cicero are also reproduced in their exact
      original form, accompanied by English versions from the 1914 translation
      by H. Rackham.
    </Text>
  </SideImageBlock>
);
export const Default = Template.bind({});
Default.args = {
  image: {
    desktop: "/images/responsive/output/image01-desktop.jpg",
    tablet: "/images/responsive/output/image02-tablet.jpg",
    mobile: "/images/responsive/output/image03-mobile.jpg",
  },
  contentBackgroundColor: "#ccc",
};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  image: {
    desktop: "/images/responsive/output/image01-desktop.jpg",
    tablet: "/images/responsive/output/image02-tablet.jpg",
    mobile: "/images/responsive/output/image03-mobile.jpg",
  },
  contentBackgroundColor: "#fada5b",
};

export const LargeImage = Template.bind({});
LargeImage.args = {
  image: {
    desktop: "/images/responsive/output/image01-desktop.jpg",
    tablet: "/images/responsive/output/image02-tablet.jpg",
    mobile: "/images/responsive/output/image03-mobile.jpg",
  },
  imageBlockWidth: "70%",
  className: "test",
};

export const ImageRightAligned = Template.bind({});
ImageRightAligned.args = {
  image: {
    desktop: "/images/responsive/output/image01-desktop.jpg",
    tablet: "/images/responsive/output/image02-tablet.jpg",
    mobile: "/images/responsive/output/image03-mobile.jpg",
  },
  imageBlockPosition: "right",
};

export const ImageLeftAligned = Template.bind({});
ImageLeftAligned.args = {
  image: {
    desktop: "/images/responsive/output/image01-desktop.jpg",
    tablet: "/images/responsive/output/image02-tablet.jpg",
    mobile: "/images/responsive/output/image03-mobile.jpg",
  },
  imageBlockPosition: "left",
};
