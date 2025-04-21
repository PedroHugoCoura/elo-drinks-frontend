import { HeroSection, HeroImage } from './style';
import { Container } from '../../style/container';

export default function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroImage src="/hero.jpg" alt="Barman preparando drinks" />
      </Container>
    </HeroSection>
  );
}
