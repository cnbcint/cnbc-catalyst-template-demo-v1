import React from "react";

import Block from "../Block";
import Text from "../Text";
import ParallaxBackground from "../ParallaxBackground";

export default {
  title: "Catalyst/ParallaxBackground",
  component: ParallaxBackground,
  argTypes: {
    overlayColor: { control: "color" },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => (
  <div style={{ maxWidth: "900px", maxHeight: "500px", overflowY: "scroll" }}>
    <ParallaxBackground {...args}>
      <Block>
        <Text>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
          Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </Text>
        <Text>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also{" "}
          <a href="#">the leap into electronic</a> typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also{" "}
          <a href="#">the leap into electronic</a> typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also{" "}
          <a href="#">the leap into electronic</a> typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Block>
    </ParallaxBackground>
  </div>
);
export const Example = Template.bind({});
Example.args = {
  image: {
    desktop: "/images/responsive/output/image03-desktop.jpg",
    tablet: "/images/responsive/output/image03-tablet.jpg",
    mobile: "/images/responsive/output/image03-mobile.jpg",
  },
  overlayColor: "rgba(255,255,255,0.8)",
};
