import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CloseIcon from "./icons/close.svg";

const Modal = (props) => {
  return (
    <StyledModal
      isOpen={props.isOpen}
      onClick={props.onClickOutside ? props.onClickOutside : props.onConfirm}
      style={props.customContainer}
    >
      <ModalContainer
        onClick={(event) => event.stopPropagation()}
        style={props.customModal}
      >
        <ModalCloseButton onClick={props.onConfirm} style={props.customCloseButton}>
          <ModalCloseButtonIcon alt="Close Button" src={CloseIcon} />
        </ModalCloseButton>
        <ModalMessage style={props.customMessage}>
          {props.message ? props.message : "Whatever you did, it is confirmed"}
        </ModalMessage>
      </ModalContainer>
    </StyledModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string,
  onClickOutside: PropTypes.func,
  customModal: PropTypes.object,
  customContainer: PropTypes.object,
  customMessage: PropTypes.object,
  customCloseButton: PropTypes.object,
};

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(216, 252, 250, 0.8);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  width: fit-content;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  padding: 0;
  cursor: default;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 30px -6px rgba(0, 0, 0, 0.2);
`;
const ModalCloseButton = styled.button`
  height: 100%;
  width: 60px;
  cursor: pointer;
  border-radius: 4px 0 0 4px;
  background-color: #3ff032;
  padding: auto;
  border: 0;
`;
const ModalCloseButtonIcon = styled.img``;
const ModalMessage = styled.p`
  margin: 0 20px;
`;
