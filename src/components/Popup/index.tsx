import React from "react";
import { ButtonSubmit, PopupContainer, PopupContent, PopupMessage } from "./style"; // Importando os estilos

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <PopupMessage>{message}</PopupMessage>
        <ButtonSubmit onClick={onClose}>OK</ButtonSubmit>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
