import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { LayoutContext } from "./Main";
import useAnimation from "../hooks/useAnimation";
import useScreenSize from "../hooks/useScreenSize";
import ScrollIndicator from "../components/ScrollIndicator";
import VimeoPlayer from "../components/VimeoPlayer";

import {
  breakpoints,
  getJustifyContent,
  getAnimation,
  getMargin,
} from "../helpers/Layout";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  overflow: visible;
  @media (min-width: ${breakpoints.mobile}) {
    height: calc(100vh - 120px - ${getMargin(2)});
    overflow: hidden;
  }
  padding-bottom: ${getMargin(2)};
  position: relative;
`;

const ImageContainer = styled(Container)`
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage.mobile});
  @media (min-width: ${breakpoints.mobile}) {
    background-image: url(${(props) => props.backgroundImage.tablet});
  }
  @media (min-width: ${breakpoints.tablet}) {
    background-image: url(${(props) => props.backgroundImage.desktop});
  }
`;

const Content = styled.div`
  position: relative;
  padding: ${getMargin(1)} ${getMargin(2)};
  box-sizing: border-box;
  z-index: 2;
  @media (min-width: ${breakpoints.mobile}) {
    padding: ${getMargin(2)};
    width: ${(props) => props.width};
    min-width: ${(props) => props.minWidth};
    max-width: ${(props) => props.maxWidth};
  }
  > * {
    color: ${(props) => props.copyColor};
    text-align: ${(props) => props.aligment};
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: ${(props) => props.overlayColor};
  z-index: 1;
`;

const Divider = styled.hr`
  border-color: ${(props) => props.dividerColor} !important;
  background-color: ${(props) => props.dividerColor};
`;

const Title = styled.h1`
  display: inline-block !important;
  font-size: 1.8rem;
  line-height: 120%;
  font-weight: bold;
  text-transform: ${(props) => (props.uppercased ? "uppercase" : "none")};
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 120%;
  font-weight: bold;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Copy = styled.div`
  font-size: 1rem;
  line-height: 1.4rem;
`;

const Logo = styled.img`
  position: relative;
  z-index: 2;
  max-width: ${(props) => props.maxWidth} !important;
  @media (min-width: ${breakpoints.mobile}) {
    width: auto !important;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  padding: ${getMargin(1)} ${getMargin(1)} 0 ${getMargin(1)};
  @media (min-width: ${breakpoints.mobile}) {
    padding: ${getMargin(1)} ${getMargin(2)};
  }
  box-sizing: border-box;
  justify-content: ${(props) => getJustifyContent(props.aligment)};
`;

const BackgroundVideo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`;
/**
 * 100 vh container that will use the height of the screen to create a hero component with an image or video background
 */
export default function FullscreenHero(props) {
  const animationConfig = {
    animationName: getAnimation(props.copyAligment),
    duration: 500,
    delay: 0,
    loop: props.loopAnimations,
    autoStart: true,
  };

  const { ref: refTitle } = useAnimation(animationConfig);
  const { ref: refSubTitle } = useAnimation({ ...animationConfig, delay: 125 });
  const { ref: refDevider } = useAnimation({ ...animationConfig, delay: 250 });
  const { ref: refCopy } = useAnimation({ ...animationConfig, delay: 250 });
  const layout = useContext(LayoutContext);

  const { width: width } = useScreenSize();
  let screenWidthToScale = 1;
  if (props.videoId) {
    if (width < 1280) {
      screenWidthToScale = 4.5;
    } else {
      screenWidthToScale = 2.5;
    }
  }

  const ContainerComponent = props.backgroundImage ? ImageContainer : Container;
  return (
    <ContainerComponent
      backgroundImage={props.backgroundImage}
      className={props.className}
      aligment={props.copyAligment}
    >
      {props.videoId && (
        <BackgroundVideo
          className={props.className ? props.className + "__video" : ""}
        >
          <VimeoPlayer
            background
            autoplayLoad
            videoID={props.videoId}
            coverImage={props.videoCoverImage}
            style={{
              height: "100%",
              padding: 0,
              transform: `scale(${screenWidthToScale})`,
            }}
          />
        </BackgroundVideo>
      )}

      <Overlay
        className={props.className ? props.className + "__overlay" : ""}
        overlayColor={props.overlayColor}
      />

      <LogoContainer aligment={props.companyLogoAligment}>
        <Logo
          className={props.className ? props.className + "__logo" : ""}
          maxWidth={props.companyLogoMaxWidth}
          src={props.companyLogoURL}
          alt="Logo"
        />
      </LogoContainer>
      <div
        className={
          props.className ? props.className + "__content__wrapper" : ""
        }
      >
        <Content
          copyColor={props.copyColor}
          width={props.copyWidth}
          minWidth={props.copyMinWidth}
          maxWidth={props.copyMaxWidth}
          aligment={props.copyAligment}
          className={props.className ? props.className + "__content" : ""}
        >
          <Title uppercased={props.titleUppercased} ref={refTitle}>
            {props.title}
          </Title>
          {props.subTitle && (
            <SubTitle ref={refSubTitle}>{props.subTitle}</SubTitle>
          )}
          {props.addDivider && (
            <Divider
              ref={refDevider}
              dividerColor={layout.colors[props.dividerColor]}
            />
          )}
          <Copy ref={refCopy}>{props.copy()}</Copy>
        </Content>
      </div>

      {props.addScrollIndicator && (
        <ScrollIndicator
          className={props.className ? props.className + "__scroll" : ""}
        />
      )}
    </ContainerComponent>
  );
}

FullscreenHero.defaultProps = {
  copyAligment: "center",
  logoAligment: "right",
  copyColor: "white",
  overlayColor: "rgba(0,0,0,.5)",
  dividerColor: "primary",
  copyWidth: "100%",
  copyMinWidth: "720px",
  copyMaxWidth: "1280px",
  loopAnimations: true,
  className: "",
  copy: () => null,
  addDivider: true,
  titleUppercased: false,
  companyLogoMaxWidth: "50%",
  subTitle: "",
  addScrollIndicator: true,
};

FullscreenHero.propTypes = {
  className: PropTypes.string,
  /**
   * Displays small tagline
   */
  copy: PropTypes.func,

  /**
   * Displays large title
   */
  title: PropTypes.string.isRequired,

  /**
   * Allows the title to be in uppercase
   */
  titleUppercased: PropTypes.bool,

  /**
   * Displays smaller sub title
   */
  subTitle: PropTypes.string,

  /**
   * Allows 3 types of alignment
   */
  copyAligment: PropTypes.oneOf(["left", "center", "right"]),
  /**
   * The color of the text (title, subtTtle and copy)
   */
  copyColor: PropTypes.string,

  /**
   * CSS width property for the copy box
   */
  copyWidth: PropTypes.string,

  /**
   * CSS min-width property for the copy box
   */
  copyMinWidth: PropTypes.string,

  /**
   * CSS max-width property for the copy box
   */
  copyMaxWidth: PropTypes.string,

  /**
   * Allows 2 types of alignment
   */
  companyLogoAligment: PropTypes.oneOf(["left", "right"]),

  /**
   * CSS max-width property for the logo image
   */
  companyLogoMaxWidth: PropTypes.string,

  /**
   * Logo image path
   */
  companyLogoURL: PropTypes.string,

  /**
   * Displays colored divider between title/subtitle and copy
   */
  addDivider: PropTypes.bool,

  /**
   * Allows 3 categories of colors for the divider
   */
  dividerColor: PropTypes.oneOf(["primary", "secondary", "tertiary"]),

  /**
   * Background image object with values for mobile, tablet and desktop
   */
  backgroundImage: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }),

  /**
   * CSS background-color property for the overlay
   */
  overlayColor: PropTypes.string,

  /**
   * Vimeo video ID to display as background video
   */
  videoId: PropTypes.string,

  /**
   * Displays a cover image before the background video is loaded
   */
  videoCoverImage: PropTypes.string,

  /**
   * Allow animations to play gain once the user scrolls this element back into the screen
   */
  loopAnimations: PropTypes.bool,

  /**
   * Ads a visual scroll indicator at the bottom of the component
   */
  addScrollIndicator: PropTypes.bool,
};
