import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useAnimation from "../hooks/useAnimation";
import { LayoutContext } from "./Main";

import { breakpoints, getMargin } from "../helpers/Layout";

const Container = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  padding-top: ${getMargin(3)};
  padding-bottom: ${getMargin(3)};
  padding-left: ${getMargin(1)};
  padding-right: ${getMargin(1)};
  max-width: 600px;
  margin: 0 auto;
`;
const ImageContainer = styled(Container)`
  background-size: cover;
  height:auto;
  margin-bottom:-10px;
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
  p,
  h4 {
    color: ${(props) => props.copyColor};
  }
`;
const Copy = styled.div`
  margin-top: ${getMargin(1)};
  margin-bottom: ${getMargin(2)};
`;
const Title = styled.h4`
  font-size: 2rem;
  line-height: 150%;
`;

const CTA = styled.a`
  color: black;
  background-color: ${(props) => props.outColor};
  padding: 0.5rem 3rem;
  display: block;
  text-align: center;
  @media (min-width: ${breakpoints.mobile}) {
    display: inline-block;
  }
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.overColor};
  }
`;
const Logo = styled.img`
  max-width: 300px;
`;

/**
 * Simple boiler plate for advertorial footer this element can be included in other container components like Block or SideImageBlock
 * */
export default function SimpleBoilerPlate(props) {
  const layout = useContext(LayoutContext);
  const { ref: refLogo } = useAnimation({
    animationName: "fadeIn",
    duration: 500,
    delay: 0,
    loop: true,
    autoStart: true,
  });
  const { ref: refTitle } = useAnimation({
    animationName: "fadeInDown",
    duration: 500,
    delay: 250,
    loop: true,
    autoStart: true,
  });
  const { ref: refCopy } = useAnimation({
    animationName: "fadeInDown",
    duration: 500,
    delay: 375,
    loop: true,
    autoStart: true,
  });

  const { ref: refCTA } = useAnimation({
    animationName: "fadeIn",
    duration: 500,
    delay: 500,
    loop: true,
    autoStart: true,
  });

  const ContainerComponent = props.backgroundImage ? ImageContainer : Container;


  return (
    <ContainerComponent
    backgroundImage={props.backgroundImage}
    className={props.className}
    backgroundColor={props.backgroundColor}
    style={props.style}
  >

      <Content copyColor={props.copyColor}>
        {props.companyLogoURL && (
          <Logo ref={refLogo} src={props.companyLogoURL} />
        )}
        <Title ref={refTitle}>{props.title}</Title>
        <Copy ref={refCopy}>{props.copy()}</Copy>
        <CTA
          outColor={props.outColor}
          href={props.ctaLink}
          overColor={layout.colors.secondary}
          ref={refCTA}
        >
          {props.ctaText}
        </CTA>
      </Content>
    </ContainerComponent>
  );
}

SimpleBoilerPlate.defaultProps = {
  className: "",
  companyLogoURL: "",
  backgroundColor: "transparent",
  copyColor: "inherit",
  outColor:"white"
};

SimpleBoilerPlate.propTypes = {
   /**
   * Responsive background image this can be differen aspect ratios per screen sizes
   */
    backgroundImage: PropTypes.shape({
      mobile: PropTypes.string,
      tablet: PropTypes.string,
      desktop: PropTypes.string,
    }),
  outColor: PropTypes.string,
  /**
   * React CSS format styles override
   */
  style: PropTypes.object,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  copyColor: PropTypes.string,
  /**
   * Image URL for logo
   */
  companyLogoURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  /**
   * URL to link when click CTA button
   */
  ctaLink: PropTypes.string.isRequired,
  /**
   * CTA Button label
   */
  ctaText: PropTypes.string.isRequired,
  /**
   * Functional component to render has copy
   */
  copy: PropTypes.func.isRequired,
};
