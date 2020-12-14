import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ModalContext = React.createContext({
  modals: {},
});

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);

  height: 100%;
  display: ${(props) => (props.open ? "flex" : "none")};
  padding: 2rem;
  padding-top: 150px;
  box-sizing: border-box;
`;

const Content = styled.div`
  color: white;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
`;

export default function Modal(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const modalContext = useContext(ModalContext);
  useEffect(() => {
    modalContext.modals[props.id] = { open, setOpen };
  }, []);
  return (
    <Container open={open} className={props.className ? props.className : ""}>
      <CloseButton
        onClick={toggle}
        className={props.className ? props.className + "__close" : ""}
      >
        close X
      </CloseButton>
      <Content className={props.className ? props.className + "__content" : ""}>
        {props.children}
      </Content>
    </Container>
  );
}

export const ModalController = (props) => {
  const modalContext = useContext(ModalContext);
  return (
    <span
      className={props.className}
      onClick={() => {
        modalContext.modals[props.modalID].setOpen(true);
      }}
    >
      {props.children}
    </span>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};
ModalController.defaultProps = {
  className: "",
};
ModalController.propTypes = {
  className: PropTypes.string,
  modalID: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};
