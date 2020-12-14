import React, { useEffect } from "react";

import SocialShare from "../SocialShare";

function loadSocialDemo() {
  fetch("socialtemplate.html")
    .then(function (response) {
      // The API call was successful!
      response.text().then((data) => {
        document.getElementById("social_bar").innerHTML = data;
      });
    })
    .catch(function () {
      // There was an error
      document.getElementById("social_bar").innerHTML =
        "Social preview not available";
    });
}

export default {
  title: "Catalyst/SocialShare",
  component: SocialShare,
  argTypes: {
    buttonColor: { control: "color" },
    iconColor: { control: "color" },
  },
};
const Template = (args) => {
  useEffect(() => {
    loadSocialDemo();
  }, []);
  return <SocialShare {...args} />;
};
export const Example = Template.bind({});
Example.args = {};
