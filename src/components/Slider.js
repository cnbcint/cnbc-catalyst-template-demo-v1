import React, { useContext } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import PropTypes from "prop-types";
import { LayoutContext } from "./Main";
import { breakpoints } from "../helpers/Layout";

const Container = styled.div`
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  /* Slider */
  .slick-loading .slick-list {
    background: #fff url("http://localhost:8080/ajax-loader.gif") center center
      no-repeat;
  }

  /* Icons */
  @font-face {
    font-family: "slick";
    font-weight: normal;
    font-style: normal;

    src: url("http://localhost:8080/fonts/slick.eot");
    src: url("http://localhost:8080/fonts/slick.eot?#iefix")
        format("embedded-opentype"),
      url("http://localhost:8080/fonts/slick.woff") format("woff"),
      url("http://localhost:8080/fonts/slick.ttf") format("truetype"),
      url("http://localhost:8080/fonts/slick.svg#slick") format("svg");
  }
  /* Arrows */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 2rem;
    height: 2rem;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 1rem;
    line-height: 100%;
    @media (min-width: ${breakpoints.mobile}) {
      font-size: 2rem;
    }
    opacity: 0.75;
    color: ${(props) => props.colors.primary};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: 0;
    z-index: 2;
    padding: 1rem;
    @media (min-width: ${breakpoints.mobile}) {
      padding: 2rem;
    }
    display: flex !important;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  [dir="rtl"] .slick-prev {
    right: 1rem;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }

  .slick-next {
    right: 0;
    z-index: 2;
    padding: 1rem;
    @media (min-width: ${breakpoints.mobile}) {
      padding: 2rem;
    }
    display: flex !important;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  [dir="rtl"] .slick-next {
    right: auto;
    left: 1rem;
  }
  .slick-next:before {
    content: "→";
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    display: none !important;
    @media (min-width: ${breakpoints.mobile}) {
      display: block !important;
    }
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: ${(props) => props.colors.primary};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: ${(props) => props.colors.primary};
  }
`;
/**
 *  React Slick carousel. Do not use react slick directly beacuse this component integrate with theme and makes deployment of styles modular.
 */
export default function SliderComponent(props) {
  const layout = useContext(LayoutContext);

  const settings = {
    ...props,
  };
  delete settings.children;
  delete settings.style;
  return (
    <Container
      colors={layout.colors}
      className={props.className ? props.className + "__wrapper" : ""}
      style={props.style}
    >
      <Slider {...settings}>{props.children}</Slider>
    </Container>
  );
}
SliderComponent.defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  autoplaySpeed: 3000,
  autoplay: false,
  centerMode: false,
  centerPadding: "50px",
  dotClass: "slick-dots",
  dots: true,
  draggable: true,
  easing: "linear",
  fade: false,
  infinite: true,
  initialSlide: 0,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipeToSlide: false,
  swipe: true,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
};
SliderComponent.propTypes = {
  /**
   * CSS class for inner slider div and wrapper
   */
  className: PropTypes.string,
  /**
   * CSS class for dots
   */
  dotClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array]).isRequired,
  /**
  React CSS format to override rules has required by design
  */
  style: PropTypes.object,
  /**
   * Enable tabbing and arrow key navigation
   */
  accessibility: PropTypes.bool,
  /**
   * Adjust the slide's height automatically
   */
  adaptiveHeight: PropTypes.bool,
  /**
   *  Index change callback. `index => ...`
   */
  afterChange: PropTypes.func,
  /**
   * Custom dots templates. Works same as customPaging
   */
  appendDots: PropTypes.func,
  /**
   * provide ref to another slider and sync it with current slider
   */
  asNavFor: PropTypes.any,
  /**
   *  Delay between each auto scroll (in milliseconds)
   */
  autoplaySpeed: PropTypes.number,
  autoplay: PropTypes.bool,
  /**
   * Index change callback. `(oldIndex, newIndex) => ...`
   */
  beforeChange: PropTypes.func,
  /**
   * Center current slide
   */
  centerMode: PropTypes.bool,
  centerPadding: PropTypes.string,
  /**
   * Custom paging templates.
   */
  customPaging: PropTypes.func,
  /**
   * CSS class for dots
   */
  dotsClass: PropTypes.string,
  /**
   * Show or hide dots indicators.
   */
  dots: PropTypes.bool,
  /**
   * Enable scrollable via dragging on desktop
   */
  draggable: PropTypes.bool,
  /**
   * Easing function name
   */
  easing: PropTypes.string,
  /**
   * Use fade animation instead of swipe between slides
   */
  fade: PropTypes.bool,
  /**
   * Infinitely wrap around contents
   */
  infinite: PropTypes.bool,
  /**
   * Index of first slide
   */
  initialSlide: PropTypes.number,
  /**
   * Load images or render components on demand or progressively
   */
  lazyLoad: PropTypes.oneOf(["ondemand", "progressive"]),
  /**
   * Edge dragged event in finite case, `direction => {...}`
   */
  onEdge: PropTypes.func,
  /**
   * componentWillMount callback. `() => void`
   */
  onInit: PropTypes.func,
  /**
   * Callback after slides load lazily `slidesLoaded => {...}`
   */
  onLazyLoad: PropTypes.func,
  /**
   * componentDidUpdate callback. `() => void`
   */
  onReInit: PropTypes.func,
  /**
   * Callback after slide changes by swiping
   */
  onSwipe: PropTypes.func,
  /**
   * Prevents autoplay while hovering on dots
   */
  pauseOnDotsHover: PropTypes.bool,
  /**
   * Prevents autoplay while focused on slides
   */
  pauseOnFocus: PropTypes.bool,
  /**
   * Prevents autoplay while hovering on track
   */
  pauseOnHover: PropTypes.bool,
  /**
   * Customize based on breakpoints, based on object below:
   */
  responsive: PropTypes.arrayOf(
    PropTypes.shape({
      breakpoint: PropTypes.number,
      settings: PropTypes.shape({
        slidesToShow: PropTypes.number,
        slidesToScroll: PropTypes.number,
        infinite: PropTypes.bool,
        dots: PropTypes.bool,
      }),
    })
  ),
  /**
   * number of rows per slide in the slider, (enables grid mode)
   */
  rows: PropTypes.number,
  /**
   * Reverses the slide order
   */
  rtl: PropTypes.bool,
  /**
   * Slide container type
   */
  slide: PropTypes.string,
  /**
   *  number of slides to display in grid mode, this is useful with rows option
   */
  slidesPerRow: PropTypes.number,
  /**
   * How many slides to scroll at once
   */
  slidesToScroll: PropTypes.number,
  /**
   * How many slides to show in one frame
   */
  slidesToShow: PropTypes.number,
  /**
   * Animation speed in milliseconds
   */
  speed: PropTypes.number,
  /**
   * Enable drag/swipe irrespective of `slidesToScroll`
   */
  swipeToSlide: PropTypes.bool,
  /**
   * Enable/disable swiping to change slides
   */
  swipe: PropTypes.bool,
  /**
   * Enable/disable touch controllers
   */
  touchMove: PropTypes.bool,
  touchThreshold: PropTypes.number,
  /**
   * Enable/Disable CSS Transitions
   */
  useCSS: PropTypes.bool,
  /**
   * Enable/Disable CSS transforms
   */
  useTransform: PropTypes.bool,
  variableWidth: PropTypes.bool,
  /**
   * Make slider vertical instead horizontal scrolling.
   */
  vertical: PropTypes.bool,
};
