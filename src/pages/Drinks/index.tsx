import Navbar from "../../components/Navbar/navbar";
import FloatingButtonWhatsApp from "../../components/FloatingButton/floatingbutton";
import { Row, Col } from "antd";
import {
  DrinksWrapper,
  SectionTitle,
  SectionTitleCartaAberta,
  DrinkWrapper,
  InfoOverlay,
  DrinkWrapperCartaAberta,
} from "./style";

export default function Drinks() {
  return (
    <>
      <Navbar />
      <DrinksWrapper>
        <SectionTitle>Bem-vindo ao nosso cardápio de drinks</SectionTitle>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <DrinkWrapper>
              <img alt="Caipirinhas" src="caipirinha.jpg" />
              <h3>Caipirinhas</h3>
              <p>Uma mistura deliciosa com cachaça, frutas e açúcar.</p>
              <InfoOverlay>
                <p>Outras Bebidas:</p>
                <ul>
                  <li>Caipivodka</li>
                  <li>Caipirinha de Frutas</li>
                  <li>Batida de Coco</li>
                  <li>E muitos outros...</li>
                </ul>
              </InfoOverlay>
            </DrinkWrapper>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <DrinkWrapper>
              <img alt="Negroni" src="negroni.jpg" />
              <h3>Clássicos</h3>
              <p>Clássicos da casa.</p>
              <InfoOverlay>
                <p>Outras Bebidas:</p>
                <ul>
                  <li>Martini</li>
                  <li>Old Fashioned</li>
                  <li>Manhattan</li>
                  <li>E muitos outros...</li>
                </ul>
              </InfoOverlay>
            </DrinkWrapper>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <DrinkWrapper>
              <img alt="Gin Tônica" src="gin.jpg" />
              <h3>Gin Tônica</h3>
              <p>Uma combinação refrescante.</p>
              <InfoOverlay>
                <p>Outras Bebidas:</p>
                <ul>
                  <li>Gin Tônica de Frutas</li>
                  <li>Gin Tropical</li>
                  <li>Gin com Red Bull</li>
                  <li>E muitos outros...</li>
                </ul>
              </InfoOverlay>
            </DrinkWrapper>
          </Col>
        </Row>

        <SectionTitleCartaAberta>
          Carta Aberta: Escolha seu Drink na Hora
        </SectionTitleCartaAberta>
        <Row gutter={16} justify="center">
          <Col xs={24} sm={24} md={8}>
            <DrinkWrapperCartaAberta>
              <img alt="Carta Aberta" src="especial.jpg" />
              <h3>Carta Aberta</h3>
              <p>Escolha seu drink favorito na hora!</p>
            </DrinkWrapperCartaAberta>
          </Col>
        </Row>
      </DrinksWrapper>
      <FloatingButtonWhatsApp />
    </>
  );
}
