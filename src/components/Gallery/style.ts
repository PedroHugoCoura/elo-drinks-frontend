import styled from 'styled-components';

export const GallerySection = styled.section`
  background-color: #f0e6d2;
  padding: 40px 0;
`;

export const TextContent = styled.div`
  flex: 1;
  min-width: 280px;

  h2 {
    color: #4a3f35;
    margin-bottom: 16px;
  }

  p {
    color: #666;
  }
`;

export const ImagesContent = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
