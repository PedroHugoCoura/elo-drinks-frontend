import styled from 'styled-components';

export const GallerySection = styled.section`
  background-color: #f0e6d2;
  padding: 60px 0;
  font-family: 'Roboto', sans-serif;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const TextContent = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 500px;

  h2 {
    color: #5A5040;
    font-size: 36px;
    margin-bottom: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.4;
  }

  p {
    color: #5A5040;
    font-size: 18px;
    line-height: 1.6;
    max-width: 500px;
  }
`;

export const ImagesContent = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;

  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;
