import React from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const navigateTo = (path) => {
  window.scroll(0, document.getElementsByName(path)[0].offsetTop);
  history.pushState(false, false, "#" + path);
  window.dispatchEvent(
    new Event("HASH_NAV", {
      url: "#" + path,
    })
  );
};

export function useHashNav() {
  const [currentHash, setCurrentHash] = React.useState(null);
  React.useEffect(() => {
    window.addEventListener(
      "HASH_NAV",
      () => {
        setCurrentHash(location.hash);
      },
      false
    );
  }, []);
  return currentHash;
}

const Section = (props) => {
  const observer = useIntersectionObserver(
    () => {
      props.inCallback(props.path);
      history.pushState(
        false,
        false,
        props.path.indexOf("#") === -1 ? "#" + props.path : props.path
      );
      window.dispatchEvent(
        new Event("HASH_NAV", {
          url: props.path.indexOf("#") === -1 ? "#" + props.path : props.path,
        })
      );
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
