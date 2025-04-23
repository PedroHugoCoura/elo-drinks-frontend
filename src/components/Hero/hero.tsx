import { HeroSection, HeroContent, HeroImage } from './style';
import { Container } from '../../style/container';

export default function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroImage src="/gifs/854128-hd_1920_1080_25fps.gif" alt="Barman preparando drinks" />
        
        <HeroContent>
          <h1>Bem-vindo à nossa página!</h1>
          <p>Confira nossos produtos e serviços.</p>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}
