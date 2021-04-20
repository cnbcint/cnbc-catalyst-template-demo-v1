import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useAnimation from "../hooks/useAnimation";
import useContainerSize from "../hooks/useContainerSize";
import VimeoPlayer from "../components/VimeoPlayer";
import { LayoutContext } from "../components/Main";
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
  padding-bottom: ${getMargin(2)};
  @media (min-width: ${breakpoints.mobile}) {
    padding-bottom: ${getMargin(5)};
  }
  @media (min-width: ${breakpoints.tablet}) {
    padding-bottom: ${getMargin(10)};
  }
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled(Container)`
  background-size: cover;
  background-position: top center;
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
  padding: ${getMargin(2)};
  width: calc(100% - ${getMargin(2)});
  box-sizing: border-box;
  @media (min-width: ${breakpoints.mobile}) {
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
`;

const Divider = styled.hr`
  border-style: solid;
  margin: ${getMargin(1)} 0;
  @media (min-width: ${breakpoints.mobile}) {
    margin: ${getMargin(2)} 0;
  }
  border-color: ${(props) => props.dividerColor} !important;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  line-height: 100%;
  font-weight: bold;
  display: inline-block !important;
  width: 100%;
  text-transform: ${(props) => (props.uppercased ? "uppercase" : "none")};
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 3.5rem;
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
  margin-top: 0 !important;
  max-width: ${(props) => props.maxWidth};
  @media (min-width: ${breakpoints.mobile}) {
    width: auto;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  padding: ${getMargin(1)};
  @media (min-width: ${breakpoints.mobile}) {
    padding: ${getMargin(2)};
  }
  box-sizing: border-box;
  justify-content: ${(props) => getJustifyContent(props.aligment)};
`;

const BackgroundVideo = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  background: transparent;
`;
const More = styled.div`
  color: #0b2265;
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 4rem;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  max-width: 680px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 30%;
  @media (min-width: ${breakpoints.mobile}) {
    bottom: 20%;
  }
  position: absolute;
`;

let timeout = null; // out of the render scope to avoid reseting this variable on each render

/**
 * SImple Advetorial Hero component with space for title, sub title and copy
 */
export default function SimpleHero(props) {
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
  const [screenWidthToScale, setScreenWidthToScale] = useState(1);
  const {
    width: cWidth,
    height: cHeight,
    ref: refContainer,
  } = useContainerSize();
  const delay = 1000;
  const videoRatio = props.videoRatio;
  const setVideo = () => {
    const containerRatio = cWidth / cHeight;
    if (!isNaN(containerRatio)) {
      if (containerRatio < videoRatio) {
        setScreenWidthToScale(cHeight / (cWidth / videoRatio));
      } else {
        setScreenWidthToScale(cWidth / (cHeight * videoRatio));
      }
    }
  };
  useEffect(() => {
    clearTimeout(timeout);

    timeout = setTimeout(setVideo, delay);
  }, [cWidth, cHeight]);
  useEffect(() => {
    setVideo();
  });

  const ContainerComponent = props.backgroundImage ? ImageContainer : Container;

  return (
    <ContainerComponent
      backgroundImage={props.backgroundImage}
      className={props.className}
      aligment={props.copyAligment}
      ref={refContainer}
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
        overlayColor={props.overlayColor}
        className={props.className ? props.className + "__overlay" : ""}
      />
      <ContentContainer
        className={
          props.className ? props.className + "__content__container" : ""
        }
      >
        <LogoContainer
          className={
            props.className ? props.className + "__logo__container" : ""
          }
          aligment={props.companyLogoAligment}
        >
          <Logo
            className={props.className ? props.className + "__logo" : ""}
            maxWidth={props.companyLogoMaxWidth}
            src={props.companyLogoURL}
            alt="Logo"
          />
        </LogoContainer>
        <ContentWrapper
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
              {props.title()}
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
        </ContentWrapper>
        <More className={props.className ? props.className + "__more" : ""}>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </More>
      </ContentContainer>
    </ContainerComponent>
  );
}

SimpleHero.defaultProps = {
  copyAligment: "center",
  logoAligment: "right",
  copyColor: "white",
  overlayColor: "rgba(0,0,0,.5)",
  dividerColor: "inherit",
  copyWidth: "100%",
  copyMinWidth: "720px",
  copyMaxWidth: "1280px",
  videoRatio: 720 / 480,
  loopAnimations: true,
  className: "",
  copy: () => null,
  addDivider: true,
  titleUppercased: false,
  companyLogoMaxWidth: "50%",
  subTitle: "",
};

SimpleHero.propTypes = {
  /**
   * Ratio for background video to calculate reponsive behavior.
   * Ratio is width/height
   */
  videoRatio: PropTypes.number,
  className: PropTypes.string,
  /**
   * Show or hide devider between title and copy
   */
  addDivider: PropTypes.bool,
  /**
   * Uppercase the title
   */
  titleUppercased: PropTypes.bool,
  /**
   * This will also affects animations
   */
  copyAligment: PropTypes.oneOf(["left", "center", "right"]),
  /**
   * Upper company logo aligment
   */
  companyLogoAligment: PropTypes.oneOf(["left", "right"]),
  /**
   * Max width for logo when using SVG big images.
   */
  companyLogoMaxWidth: PropTypes.string,
  /**
   * Title, subtitle and copy font color
   */
  copyColor: PropTypes.string,
  /**
   * RGBA css property for overlay to make background do not interfere with copys
   */
  overlayColor: PropTypes.string,
  /**
   * Devider color css hex
   */
  dividerColor: PropTypes.string,
  /**
   * Responsive background image this can be differen aspect ratios per screen sizes
   */
  backgroundImage: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }),
  /**
   * Displays smaller sub title
   */
  subTitle: PropTypes.string,
  /**
   * Displays large title
   */
  title: PropTypes.func.isRequired,
  /**
   * Logo image path
   */
  companyLogoURL: PropTypes.string.isRequired,
  /**
   * CSS width property for the copy box
   */
  copyWidth: PropTypes.string,
  /**
   * Copy Min width for mobile
   */
  copyMinWidth: PropTypes.string,
  /**
   * Copy Max width for desktop and tablet
   */
  copyMaxWidth: PropTypes.string,
  /**
   * Allow animations to reset when user scrolls the element back into viewport
   */
  loopAnimations: PropTypes.bool,

  /**
   * Vimeo video ID to display as background video
   */
  videoId: PropTypes.string,

  /**
   * Displays a cover image before the background video is loaded
   */
  videoCoverImage: PropTypes.string,

  /**
   * Functional component for copy content
   */
  copy: PropTypes.func,
};
