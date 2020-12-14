import React from "react";

import VimeoPlayer from "../VimeoPlayer";

export default {
  title: "Catalyst/VimeoPlayer",
  component: VimeoPlayer,
  argTypes: {
    overlayColor: { control: "color" },
  },
};
const Template = (args) => <VimeoPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoID: "350988305",
};

export const VideoBackground = Template.bind({});
VideoBackground.args = {
  videoID: "350988305",
  background: true,
  autoplay: true,
};

export const VideoWithCoverImage = Template.bind({});
VideoWithCoverImage.args = {
  videoID: "350988305",
  coverImage: "http://localhost:8080/images/header-desktop.jpg",
  background: true,
};

export const VideoWithOverlay = Template.bind({});
VideoWithOverlay.args = {
  videoID: "350988305",
  background: true,
  overlay: true,
  overlayColor: "rgba(255,165,0,.5)",
};
