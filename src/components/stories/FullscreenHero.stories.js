import React from "react";

import FullscreenHero from "../FullscreenHero";
import Theme from "../../Theme.json";

export default {
  title: "Catalyst/FullscreenHero",
  component: FullscreenHero,
  argTypes: {
    dividerColor: { control: "color" },
    overlayColor: { control: "color" },
    copyColor: { control: "color" },
  },
};
const Template = (args) => <FullscreenHero {...args} />;

const staticArgs = {
  className: "test",
  title: "The standard Lorem Ipsum passage, used since the 1500s",
  subTitle: "A smaller subtitle",
  // eslint-disable-next-line react/display-name
  copy: () => (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo{" "}
        <strong>ligula eget dolor.</strong> Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
    </>
  ),
  companyLogoURL: "images/catalyst.svg",
  companyLogoAligment: "right",
  copyAligment: "center",
  copyMaxWidth: Theme.maxWidth,
  addScrollIndicator: true,
  addDivider: true,
  dividerColor: "primary",
};

export const ImageBackground = Template.bind({});
ImageBackground.args = {
  ...staticArgs,
  backgroundImage: {
    desktop: "images/header-desktop.jpg",
    tablet: "images/header-tablet.jpg",
    mobile: "images/header-mobile.jpg",
  },
};

export const ImageBackgroundWithOverlay = Template.bind({});
ImageBackgroundWithOverlay.args = {
  ...staticArgs,
  backgroundImage: {
    desktop: "images/header-desktop.jpg",
    tablet: "images/header-tablet.jpg",
    mobile: "images/header-mobile.jpg",
  },
  dividerColor: "tertiary",
  overlayColor: "rgba(255,165,0,.5)",
};

export const ImageBackgroundWithOrangeText = Template.bind({});
ImageBackgroundWithOrangeText.args = {
  ...staticArgs,
  copyColor: "orange",
  backgroundImage: {
    desktop: "images/header-desktop.jpg",
    tablet: "images/header-tablet.jpg",
    mobile: "images/header-mobile.jpg",
  },
};

export const ImageBackgroundRightAligned = Template.bind({});
ImageBackgroundRightAligned.args = {
  ...staticArgs,
  logoAligment: "right",
  copyAligment: "right",
  backgroundImage: {
    desktop: "images/header-desktop.jpg",
    tablet: "images/header-tablet.jpg",
    mobile: "images/header-mobile.jpg",
  },
};

export const VideoBackground = Template.bind({});
VideoBackground.args = {
  ...staticArgs,
  videoId: "468693933",
};

export const VideoBackgroundWithCoverImage = Template.bind({});
VideoBackgroundWithCoverImage.args = {
  ...staticArgs,
  videoId: "468693933",
  videoCoverImage: "images/header-desktop.jpg",
};
