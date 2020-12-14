import React from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

/**
 Vime embedd player (iframe format) Allow to embed a vimeo video
*/
export default function VimeoPlayer(props) {
  const styles = {
    padding: "56.25% 0 0 0",
    position: "relative",

    ...props.style,
  };

  const { nodeRef, isIntersecting } = useIntersectionObserver();
  let autoplay = false;
  if (props.autoplayScroll) {
    autoplay = isIntersecting;
  } else if (props.autoplayLoad) {
    autoplay = true;
  }
  return (
    <div style={styles} className={props.className}>
      {props.coverImage && (
        <div
          style={{
            backgroundImage: `url(${props.coverImage})`,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            backgroundSize: "cover",
          }}
          className={props.className ? props.className + "__cover" : ""}
        />
      )}
      <iframe
        ref={nodeRef}
        src={`https://player.vimeo.com/video/${props.videoID}?background=${
          props.background ? 1 : 0
        }&autoplay=${autoplay ? 1 : 0}&title=${
          props.showTitle ? 1 : 0
        }&byline=${props.showByLine ? 1 : 0}&portrait=${
          props.showPortrait ? 1 : 0
        }`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allow="autoplay;"
        allowFullScreen
      ></iframe>
      {props.overlay && (
        <div
          style={{
            backgroundColor: props.overlayColor,
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            left: 0,
          }}
          className={props.className ? props.className + "__overlay" : ""}
        ></div>
      )}
    </div>
  );
}

VimeoPlayer.defaultProps = {
  className: "",
  background: false,
  autoplayLoad: false,
  autoplayScroll: false,
  overlay: false,
  overlayColor: "rgba(0,0,0,.5)",
  showTitle: false,
  showByLine: false,
  showPortrait: false,
  style: {},
};

VimeoPlayer.propTypes = {
  className: PropTypes.string,

  /**
   * Vimeo Video ID
   */
  videoID: PropTypes.string.isRequired,

  /**
   * Use for background video. This will remove the controls and autoplay the video muted
   */
  background: PropTypes.bool,

  /**
   * Autoplay video on load of the page
   */

  autoplayLoad: PropTypes.bool,
  /**
   * Autoplay video on enteriving viewportt
   */

  autoplayScroll: PropTypes.bool,
  /**
   * When using background you can addd an overlay div on top of video and customize color with overlayColor
   */
  overlay: PropTypes.bool,

  /**
   * RGBA css property for overlay color this will enabled to darken the video for backgrounds.
   */
  overlayColor: PropTypes.string,

  /**
   * Displays a cover image before the background video is loaded
   */
  coverImage: PropTypes.string,

  /**
   * Show the video's title.
   */
  showTitle: PropTypes.bool,

  /**
   * Show the author of the video
   */
  showByLine: PropTypes.bool,

  /**
   * Show the author's profile image (portrait)
   */
  showPortrait: PropTypes.bool,

  /**
  React CSS format to override rules has required by design
  */
  style: PropTypes.object,
};
