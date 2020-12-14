import React from "react";

import Image from "../Image";
import Columns from "../Columns";

export default {
  title: "Catalyst/Columns",
  component: Columns,
};

const Template = (args) => (
  <div style={{ maxWidth: "800px" }}>
    <Columns {...args}>
      <Image
        source={{
          desktop: "images/responsive/output/image04-tablet.jpg",
          tablet: "images/responsive/output/image04-tablet.jpg",
          mobile: "images/responsive/output/image04-mobile.jpg",
        }}
        alt="Alt Text"
      />
      <Image
        source={{
          desktop: "images/responsive/output/image05-tablet.jpg",
          tablet: "images/responsive/output/image05-tablet.jpg",
          mobile: "images/responsive/output/image05-mobile.jpg",
        }}
        alt="Alt Text"
      />
      <Image
        source={{
          desktop: "images/responsive/output/image06-tablet.jpg",
          tablet: "images/responsive/output/image06-tablet.jpg",
          mobile: "images/responsive/output/image06-mobile.jpg",
        }}
        alt="Alt Text"
      />
    </Columns>
  </div>
);

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {};

const TwoColumnsTemplate = (args) => (
  <div style={{ maxWidth: "800px" }}>
    <Columns {...args}>
      <Image
        source={{
          desktop: "images/responsive/output/image05-tablet.jpg",
          tablet: "images/responsive/output/image05-tablet.jpg",
          mobile: "images/responsive/output/image05-mobile.jpg",
        }}
        alt="Alt Text"
      />
      <Image
        source={{
          desktop: "images/responsive/output/image06-tablet.jpg",
          tablet: "images/responsive/output/image06-tablet.jpg",
          mobile: "images/responsive/output/image06-mobile.jpg",
        }}
        alt="Alt Text"
      />
    </Columns>
  </div>
);

export const TwoColumns = TwoColumnsTemplate.bind({});
TwoColumns.args = {};
