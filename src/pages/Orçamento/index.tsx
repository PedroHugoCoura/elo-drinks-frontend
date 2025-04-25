import {
  OrçamentoSection,
  OrçamentoContainer,
  OrçamentoCard,
  OrçamentoTitle,
  InputField,
  ButtonSubmit,
} from "./style";
import { Container } from "../../style/container";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer";

export default function Orçamento() {
  return (
    <>
      <Navbar />
      <OrçamentoSection>
        <Container>
          <OrçamentoTitle>Orçamento do Evento</OrçamentoTitle>
          <OrçamentoContainer>
            <OrçamentoCard>
              <h3>Informações do Evento</h3>
              <label htmlFor="nome">*Nome:</label>
              <InputField type="text" id="nome" placeholder="Digite seu nome" />
              <label htmlFor="email">*E-mail:</label>
              <InputField
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
              />
              <label htmlFor="telefone">*Telefone:</label>
              <InputField
                type="tel"
                id="telefone"
                placeholder="Digite seu telefone"
              />
              <label htmlFor="data">*Data do evento:</label>
              <InputField type="date" id="data" />
            </OrçamentoCard>
            <OrçamentoCard>
              <h3>Detalhes do Evento</h3>
              <label htmlFor="local">*Local:</label>
              <InputField
                type="text"
                id="local"
                placeholder="Onde será o evento?"
              />
              <label htmlFor="convidados">*Número de Convidados:</label>
              <InputField
                type="number"
                id="convidados"
                placeholder="Quantidade de convidados"
              />
              <label htmlFor="tipoEvento">*Tipo de Evento:</label>
              <InputField
                type="text"
                id="tipoEvento"
                placeholder="Qual o tipo de evento?"
              />
              <label htmlFor="horario">*Horário do evento:</label>
              <InputField type="time" id="horario" />
            </OrçamentoCard>
          </OrçamentoContainer>
          <ButtonSubmit type="submit">Enviar Orçamento</ButtonSubmit>
        </Container>
      </OrçamentoSection>
      <Footer />
    </>
  );
}
