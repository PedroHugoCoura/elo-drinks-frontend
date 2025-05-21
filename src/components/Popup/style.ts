import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const PopupMessage = styled.p`
  margin-bottom: 16px;
  font-size: 16px;
`;

export const ButtonSubmit = styled.button`
  padding: 12px 30px;
  background-color: #5A5040;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  display: block;
  margin: 40px auto 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #F0E6D2;
    color: #5A5040;
  }
`;
