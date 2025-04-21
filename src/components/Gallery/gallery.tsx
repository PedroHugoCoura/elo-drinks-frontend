import { GallerySection, TextContent, ImagesContent } from './style';
import { Container } from '../../style/container';

export default function Gallery() {
  return (
    <GallerySection>
      <Container>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <TextContent>
            <h2>Transforme sua festa em uma experiência inesquecível!</h2>
            <p>Experiências sensoriais com coquetéis criados ao vivo por bartenders profissionais.</p>
          </TextContent>
          <ImagesContent>
            <img src="/evento1.jpg" alt="Evento 1" />
            <img src="/evento2.jpg" alt="Evento 2" />
            <img src="/evento3.jpg" alt="Evento 3" />
          </ImagesContent>
        </div>
      </Container>
    </GallerySection>
  );
}
