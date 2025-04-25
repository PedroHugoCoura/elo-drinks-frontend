import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  height: 80vh; /* Ajuste a altura para 80% da tela */
  background-image: url('/gifs/854128-hd_1920_1080_25fps.gif'); /* GIF como fundo */
  background-size: cover; /* Garante que o GIF cubra toda a área */
  background-position: center; /* Centraliza o GIF no fundo */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
`;

export const HeroContent = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5); /* Fundo suave para contraste com o texto */
  border-radius: 12px;
  width: 80%; /* Limita a largura para não ficar tão largo */
  max-width: 900px; /* Limita a largura máxima */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o conteúdo */
  
  h1 {
    font-size: 48px; /* Tamanho maior para o título */
    font-family: 'Arial', sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 20px;
    transition: transform 0.5s ease-in-out;
    
    &:hover {
      transform: scale(1.05); /* Efeito de suavização no hover */
    }
  }

  p {
    font-size: 20px;
    font-family: 'Arial', sans-serif; /* Fonte complementar mais leve */
    font-weight: 400;
    color: #fff;
  }
`;

