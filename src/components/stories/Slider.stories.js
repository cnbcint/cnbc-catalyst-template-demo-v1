import React from "react";
import Image from "../Image";
import Slider from "../Slider";

export default {
  title: "Catalyst/Slider",
  component: Slider,
};
const Template = (args) => (
  <div style={{ maxWidth: "1200px" }}>
    <Slider {...args}>
      <div>
        <Image
          source={{
            desktop:
              "http://localhost:8080/images/responsive/output/image01-desktop.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/image01-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/image01-mobile.jpg",
          }}
          alt="Alt Text"
        />
      </div>
      <div>
        <Image
          source={{
            desktop:
              "http://localhost:8080/images/responsive/output/image01-desktop.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/image01-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/image01-mobile.jpg",
          }}
          alt="Alt Text"
        />
      </div>
      <div>
        <Image
          source={{
            desktop:
              "http://localhost:8080/images/responsive/output/image01-desktop.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/image01-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/image01-mobile.jpg",
          }}
          alt="Alt Text"
        />
      </div>
    </Slider>
  </div>
);
export const Example = Template.bind({});
Slider.args = {};
