import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #e6d3b3;
`;

export const HeroImage = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
