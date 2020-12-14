import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LayoutContext } from "./Main";
import CTAButtton from "./CTAButton";

const Container = styled.div`
  h5 {
    font-weight: normal;
    font-size: 1.2rem;
  }
  span {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.layout.colors.primary};
  }
  img {
    margin: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
  p {
    font-size: 1rem;
    line-height: 1.2rem;
    opacity: 0.75;
  }
`;

export default function CtaArticleItem(props) {
  const layout = useContext(LayoutContext);
  return (
    <Container className={props.className} layout={layout}>
      <img src={props.image} loading="lazy" alt="Thumbnail" />
      {props.tagline && <span>{props.tagline}</span>}
      <h5>{props.title}</h5>
      {props.copy && <p>{props.copy}</p>}
      <CTAButtton link={props.link} target={props.target}>
        {props.ctaText}
      </CTAButtton>
    </Container>
  );
}
CtaArticleItem.defaultProps = {
  target: "_self",
  className: "",
};
CtaArticleItem.propTypes = {
  ctaText: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_self", "_blank"]),
  image: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  copy: PropTypes.string,
  title: PropTypes.string.isRequired,
};
