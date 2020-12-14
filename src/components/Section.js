import React from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Section = (props) => {
  const observer = useIntersectionObserver(
    () => {
      props.inCallback(props.path);
      if (props.path === "#") {
        history.pushState(
          false,
          false,
          props.path.indexOf("#") === -1 ? "#" + props.path : props.path
        );
      } else {
        window.location.hash = props.path;
      }
    },
    { threshold: 0.1, rootMargin: props.rootMargin }
  );

  return (
    <div ref={observer.nodeRef} className={props.className}>
      <a name={props.path}></a>
      {props.children}
    </div>
  );
};

Section.defaultProps = {
  className: "",
  path: "#/",
  rootMargin: "0px",
  inCallback: () => {},
};

Section.propTypes = {
  rootMargin: PropTypes.string,
  className: PropTypes.string,
  path: PropTypes.string,
  inCallback: PropTypes.func,
  children: PropTypes.any,
};

export default Section;
