import { Row, Col } from 'antd';
import { SectionTitle, StyledCard, ServiceButton, ServicesWrapper } from '../Serviços/style';
import { Typography } from 'antd';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const ServicesPage = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <ServicesWrapper>
        <SectionTitle>O Que Oferecemos</SectionTitle>
        <Row gutter={16} justify="center">
          <Col xs={24} sm={12} md={8}>
            <StyledCard
              hoverable
              cover={<img alt="Casamentos" src="casamento.jpg" />}
            >
              <Title level={4}>Orçamento para Casamentos</Title>
              <Paragraph>Coquetéis criativos para tornar seu grande dia ainda mais especial.</Paragraph>
              <ServiceButton onClick={() => navigate('/orçamento?tipoEvento=Casamento')}>
                Solicitar Orçamento
              </ServiceButton>
            </StyledCard>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <StyledCard
              hoverable
              cover={<img alt="Festas" src="festa.jpg" />}
            >
              <Title level={4}>Orçamento para Festas</Title>
              <Paragraph>Serviço de bar personalizado para todas as suas celebrações.</Paragraph>
              <ServiceButton onClick={() => navigate('/orçamento?tipoEvento=Festa')}>
                Solicitar Orçamento
              </ServiceButton>
            </StyledCard>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <StyledCard
              hoverable
              cover={<img alt="Eventos Corporativos" src="negocios.jpg" />}
            >
              <Title level={5}>Orçamento para Eventos Corporativos</Title>
              <Paragraph>Experiência de bar sofisticada para eventos empresariais.</Paragraph>
              <ServiceButton onClick={() => navigate('/orçamento?tipoEvento=Evento Corporativo')}>
                Solicitar Orçamento
              </ServiceButton>
            </StyledCard>
          </Col>
        </Row>
      </ServicesWrapper>
      <Footer />
    </>
  );
};

export default ServicesPage;