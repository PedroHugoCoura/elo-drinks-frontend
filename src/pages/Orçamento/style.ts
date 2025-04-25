import styled from 'styled-components';

export const OrçamentoSection = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: #e6d3b3;
  color: #5A5040;
`;

export const OrçamentoTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: #5A5040;
  margin-bottom: 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Arial', sans-serif;
`;

export const OrçamentoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

export const OrçamentoCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 300px;
  max-width: 45%;
  
  h3 {
    font-size: 24px;
    color: #5A5040;
    margin-bottom: 15px;
  }

  label {
    font-size: 16px;
    color: #5A5040;
    display: block;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #5A5040;
  border-radius: 8px;
  font-size: 16px;
  color: #5A5040;

  &::placeholder {
    color: #B5B5B5;
  }

  &:focus {
    border-color: #E0CEAA;
    outline: none;
  }
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
