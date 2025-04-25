import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  height: 80vh;
  background-image: url('/gifs/854128-hd_1920_1080_25fps.gif');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
`;

export const HeroContent = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  width: 80%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  h1 {
    font-size: 48px;
    font-family: 'Arial', sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 20px;
    transition: transform 0.5s ease-in-out;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  p {
    font-size: 20px;
    font-family: 'Arial', sans-serif;
    font-weight: 400;
    color: #fff;
  }
`;

