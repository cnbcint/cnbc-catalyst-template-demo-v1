import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useAnimation from "../hooks/useAnimation";
import useContainerSize from "../hooks/useContainerSize";
import VimeoPlayer from "../components/VimeoPlayer";
import { LayoutContext } from "./Main";
import { breakpoints, getAnimation, getMargin } from "../helpers/Layout";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  // padding-bottom: ${getMargin(2)};
  @media (min-width: ${breakpoints.mobile}) {
    // padding-bottom: ${getMargin(5)};
  }
  @media (min-width: ${breakpoints.tablet}) {
    // padding-bottom: ${getMargin(10)};
  }
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled(Container)`
  background-size: cover;
  height: auto;
  margin-bottom: -10px;
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
z-index:1;
  // width: calc(100% - ${getMargin(2)});
  box-sizing: border-box;
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;
  padding-top:90%;
  padding-bottom:20%;
  > * {
    color: ${(props) => props.copyColor};
    text-align: ${(props) => props.aligment};
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${getMargin(1)};
    padding-top:70%;
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

const Divider = styled.div`
  // border-style: solid;
  width:200px;
  height:15px;
  background: ${(props) => props.dividerColor} !important;
  margin: ${getMargin(1)} 0;
  @media (min-width: ${breakpoints.mobile}) {
    margin: ${getMargin(2)} 0;
  }
  // border-color: ${(props) => props.dividerColor} !important;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  line-height: 100%;
  font-weight: 700 !important;
  display: inline-block !important;
  width: 100%;
  text-transform: ${(props) => (props.uppercased ? "uppercase" : "none")};
  font-family: "Proxima Nova", sans-serif;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 3.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 120%;
  font-weight: bold;
  color: ${(props) => props.copyColor};
  font-family: 'Proxima Nova', sans-serif;
  // text-transform: ${(props) => (props.uppercased ? "uppercase" : "none")};
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Copy = styled.div`
  font-size: 1rem;
  line-height: 1.4rem;
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

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

let timeout = null; // out of the render scope to avoid reseting this variable on each render

/**
 * SImple Advetorial Hero component with space for title, sub title and copy
 */
export default function SectionHero(props) {
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
            {/* <SubTitle uppercased={props.subTitleUppercased} ref={refSubTitle}>
              {props.subTitle()}
            </SubTitle> */}
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
      </ContentContainer>
    </ContainerComponent>
  );
}

SectionHero.defaultProps = {
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
  subTitleUppercased: false,
  companyLogoMaxWidth: "50%",
  // subTitle: "",
};

SectionHero.propTypes = {
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
   * Uppercase the subttitle
   */
  subTitleUppercased: PropTypes.bool,
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
  // subTitle: PropTypes.func,
  subTitle: PropTypes.string,
  /**
   * Displays large title
   */
  title: PropTypes.func.isRequired,
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
