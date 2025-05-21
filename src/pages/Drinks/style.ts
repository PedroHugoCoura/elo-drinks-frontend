import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const DrinksWrapper = styled(Content)`
  padding: 40px 20px;
  background-color: #f0e6d2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: #5A5040;
  margin-bottom: 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Arial', sans-serif;
`;

export const DrinkWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  overflow: hidden;
  background-color: #fff;
  height: 100%;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 16px;
    color: #5A5040;
  }

  p {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 16px;
    color: #5A5040;
  }
`;

export const DrinkWrapperCartaAberta = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  min-width: 250px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  overflow: hidden;

  img {
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 16px;
    color: #5A5040;
  }

  p {
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 16px;
    color: #5A5040;
  }
`;

export const InfoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  transition: opacity 0.3s ease-in-out;
  padding: 16px;
  text-align: center;

  p {
    font-size: 16px;
    margin: 10px 0;
    color: white;
  }

  ul {
    list-style-type: disc;
    text-align: left;
    margin: 10px 0;
    padding-left: 20px;
  }

  li {
    font-size: 16px;
    color: white;
  }

  ${DrinkWrapper}:hover & {
    opacity: 1;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
`;

export const ColWrapper = styled.div`
  flex: 1 1 300px;
  max-width: 300px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

