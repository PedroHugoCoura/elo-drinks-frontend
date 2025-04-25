import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #333;
  padding: 40px 20px;
  color: white;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const FooterLogo = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 10px;

  img {
    width: 200px;
    height: auto;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  max-width: 300px;
`;

export const FooterTitle = styled.h3`
  font-size: 24px;
  color: #F1A400;
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  font-size: 16px;
  color: white;
  margin: 5px 0;
  line-height: 1.5;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.a`
  color: #F1A400;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;
