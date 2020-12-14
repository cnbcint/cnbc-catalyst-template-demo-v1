import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getMargin } from "../helpers/Layout";
const Container = styled.div`
  flex: 1 1 auto;
  background-color: ${(props) => props.backgroundColor};
  padding: ${getMargin(1)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const Pic = styled.img`
  border-radius: 50%;
  width: 25% !important;
  margin: 0 !important;
`;

const Person = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin-top: auto;
`;
const Details = styled.div`
  width: 75%;
  box-sizing: border-box;
  > * {
    display: block;
  }
`;
const Spacer = styled.div`
  width: 25% !important;
`;
const Copy = styled.div`
  margin-bottom: ${getMargin(3)};
`;
export default function CalloutBox(props) {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <Copy>{props.copy()}</Copy>
      <Person>
        <Details>
          <strong>{props.fullname}</strong>
          <small>{props.position}</small>
          <small>{props.company}</small>
        </Details>
        {props.profilePicURL && (
          <Pic src={props.profilePicURL} alt="proile pic" />
        )}
        {!props.profilePicURL && <Spacer />}
      </Person>
    </Container>
  );
}

CalloutBox.defaultProps = {
  backgroundColor: "#ccc",
};

CalloutBox.propTypes = {
  copy: PropTypes.func,
  backgroundColor: PropTypes.string,
  fullname: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  profilePicURL: PropTypes.string,
};
