import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Pdrop = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.highlight ? "1.4em" : "1.2rem")};
  line-height: ${(props) => (props.highlight ? "140%" : "125%")};
  text-align: ${(props) => props.textAlign};
  max-width: 600px;
  margin:0 auto;
  &::first-letter {
    color: ${(props) => props.dropCapColor};
    padding: 0 0;
    margin: 0.5rem 1rem 0 0;
    font-size: 5.5rem;
    font-weight: bold;
    float: left;
    line-height: 4rem;
  }
`;
const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.highlight ? "1.4rem" : "1.2rem")};
  line-height: ${(props) => (props.highlight ? "140%" : "125%")};
  text-align: ${(props) => props.textAlign};
  max-width: 600px;
  margin:0 auto;

`;
/** 
 Text Block will add a paragraph element to it's children. Do not add P inside this element to avoid double nested P element
*/
export default function Text(props) {
  if (props.dropCap) {
    return (
      <Pdrop
        highlight={props.highlight}
        dropCapColor={props.dropCapColor ? props.dropCapColor : props.color}
        color={props.color}
        textAlign={props.textAlign}
        style={props.style}
        className={props.className}
      >
        {props.children}
      </Pdrop>
    );
  }
  return (
    <P
      highlight={props.highlight}
      color={props.color}
      style={props.style}
      textAlign={props.textAlign}
      className={props.className}
    >
      {props.children}
    </P>
  );
}

Text.defaulProps = {
  dropCap: false,
  color: "inherit",
  dropCapColor: "",
  highlight: false,
  className: "",
  textAlign: "left",
};

Text.propTypes = {
  /**
   Will Increase font size to highlight the text
   */
  highlight: PropTypes.bool,
  /**
   Will Increase font size of the first letter of the paragraph to achive DropCap 
   */
  dropCap: PropTypes.bool,
  /**
   CSS override for font color
   */
  color: PropTypes.string,
  /**
   CSS text aligment
   */
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  /**
   CSS color for drop cap
   */
  dropCapColor: PropTypes.string,
  /**
  React CSS format to override rules has required by design
  */
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};
