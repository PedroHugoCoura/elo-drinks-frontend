import { HeroSection, HeroContent } from './style';
import { Container } from '../../style/container';

export default function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <h1>Bem-vindo à Elo Drinks!</h1>
          <p>Confira nossos Drinks e serviços.</p>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}
