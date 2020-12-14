import React from "react";
import Poster from "../Poster";

export default {
  title: "Catalyst/Poster",
  component: Poster,
};

const Template = (args) => <Poster {...args} />;
export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      Poster: &quot;There is no one who loves pain itself, who seeks after it
      and wants to have it, simply because it is pain...&quot;
    </>
  ),
  image: {
    desktop: "images/responsive/output/image03-desktop.jpg",
    tablet: "images/responsive/output/image03-tablet.jpg",
    mobile: "images/responsive/output/image03-mobile.jpg",
  },
};
