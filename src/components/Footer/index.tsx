import { FooterWrapper, FooterContent, FooterLogo, FooterSection, FooterTitle, FooterText, SocialIcons, SocialIcon } from './style';
import { Container } from '../../style/container';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Usando ícones de redes sociais
import { Logo } from '../Navbar/style';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterLogo>
            <Logo src="logo.png" alt="Logo" />
          </FooterLogo>
          
          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <FooterText>
              <strong>Telefone:</strong> <br /> Tel: 11 99466-3100
            </FooterText>
            <FooterText>
              <strong>E-mail:</strong> <br /> atendimento@elodrinks.com.br
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Siga-nos</FooterTitle>
            <SocialIcons>
              <SocialIcon href="https://www.facebook.com" target="_blank">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="https://www.twitter.com" target="_blank">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </SocialIcon>
            </SocialIcons>
          </FooterSection>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
}
