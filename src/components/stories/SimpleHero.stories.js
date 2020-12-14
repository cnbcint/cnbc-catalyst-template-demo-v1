/* eslint react/display-name:0 */
import React from "react";

import SimpleHero from "../SimpleHero";

export default {
  title: "Catalyst/SimpleHero",
  component: SimpleHero,
  argTypes: {
    dividerColor: { control: "color" },
    overlayColor: { control: "color" },
    copyColor: { control: "color" },
  },
};
const Template = (args) => <SimpleHero {...args} />;
export const ExampleHeroWithBackgroundImage = Template.bind({});
ExampleHeroWithBackgroundImage.args = {
  companyLogoURL: "images/catalyst.svg",
  title: "The standard Lorem Ipsum passage",
  subTitle: "Used since the 1500s",
  companyLogoAligment: "left",
  companyLogoMaxWidth: "300px",
  dividerColor: "primary",
  copyAligment: "left",
  backgroundImage: {
    desktop: "images/header-desktop.jpg",
    tablet: "images/header-tablet.jpg",
    mobile: "images/header-mobile.jpg",
  },
  copy: () => (
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo{" "}
      <strong>ligula eget dolor.</strong> Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  ),
};

export const ExanpleWithBackgroundVideo = Template.bind({});
ExanpleWithBackgroundVideo.args = {
  companyLogoURL: "images/catalyst.svg",
  title: () => "The standard Lorem Ipsum passage",
  subTitle: "Used since the 1500s",
  companyLogoAligment: "left",
  companyLogoMaxWidth: "300px",
  dividerColor: "primary",
  copyAligment: "left",
  backgroundImage: {
    desktop: "images/header-desktop.jpg",
    tablet: "images/header-tablet.jpg",
    mobile: "images/header-mobile.jpg",
  },
  videoId: "468693933",
  videoCoverImage: "http://localhost:8080/images/header-desktop.jpg",
  copy: () => (
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo{" "}
      <strong>ligula eget dolor.</strong> Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  ),
};
