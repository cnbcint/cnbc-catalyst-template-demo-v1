import React from "react";

import Image from "../Image";

export default {
  title: "Catalyst/Image",
  component: Image,
};
const Template = (args) => <Image {...args} />;
export const Example = Template.bind({});
Example.args = {
  source: {
    desktop: "/images/responsive/output/image01-desktop.jpg",
    tablet: "/images/responsive/output/image02-tablet.jpg",
    mobile: "/images/responsive/output/image03-mobile.jpg",
  },
  alt: "Test Image",
};
