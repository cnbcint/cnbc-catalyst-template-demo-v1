import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LayoutContext } from "./Main";

const Container = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.layout.colors.copy};

    h5 {
      font-weight: normal;
      font-size: 1.2rem;
    }
    &:hover {
      h5 {
        color: ${(props) => props.layout.colors.primary};
      }
      span {
        color: ${(props) => props.layout.colors.copy};
      }
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
  }
`;

export default function ArticleItem(props) {
  const layout = useContext(LayoutContext);
  return (
    <Container className={props.className} layout={layout}>
      <a href={props.link} target={props.target}>
        <img src={props.image} loading="lazy" alt="Thumbnail" />
        {props.tagline && <span>{props.tagline}</span>}
        <h5>{props.title}</h5>
        {props.copy && <p>{props.copy}</p>}
      </a>
    </Container>
  );
}
ArticleItem.defaultProps = {
  target: "_self",
  className: "",
};
ArticleItem.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_self", "_blank"]),
  image: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  copy: PropTypes.string,
  title: PropTypes.string.isRequired,
};
