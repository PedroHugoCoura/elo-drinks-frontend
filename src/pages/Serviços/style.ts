import styled from 'styled-components';
import { Button, Card } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

export const ServicesWrapper = styled.div`
  padding: 60px 20px;
  background-color: #f0e6d2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled(Title)`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: #5A5040 !important;
  margin-bottom: 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Arial', sans-serif;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 320px;
  height: 380px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .ant-card-body {
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ant-card-cover img {
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const ServiceButton = styled(Button)`
  background-color: #5a5040;
  color: white;
  border: none;
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3d2a1c;
  }

  &:focus {
    background-color: #3d2a1c;
  }
`;
