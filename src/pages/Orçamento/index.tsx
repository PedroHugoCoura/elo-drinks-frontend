import { useState, useEffect } from "react";
import {
  OrçamentoSection,
  OrçamentoContainer,
  OrçamentoCard,
  OrçamentoTitle,
  InputField,
  ButtonSubmit,
  ErrorText,
} from "./style";
import { Container } from "../../style/container";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer";
import { useSearchParams } from 'react-router-dom';
import Popup from "../../components/Popup";

export default function Orçamento() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    local: "",
    convidados: "",
    tipoEvento: "",
    horario: "",
    duracao: "",
  });

  const [searchParams] = useSearchParams();
  const tipoEventoURL = searchParams.get("tipoEvento") || "";

  useEffect(() => {
    setFormData((prev) => ({ ...prev, tipoEvento: tipoEventoURL }));
  }, [tipoEventoURL]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!formData.email.trim()) newErrors.email = "E-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "E-mail inválido.";

    if (!formData.telefone.trim()) newErrors.telefone = "Telefone é obrigatório.";
    else if (!/^\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/.test(formData.telefone))
      newErrors.telefone = "Telefone inválido.";

    if (!formData.data) newErrors.data = "Data é obrigatória.";
    if (!formData.local.trim()) newErrors.local = "Local é obrigatório.";

    if (!formData.convidados.trim()) newErrors.convidados = "Número de convidados é obrigatório.";
    else if (isNaN(Number(formData.convidados)) || Number(formData.convidados) <= 0)
      newErrors.convidados = "Número de convidados inválido.";

    if (!formData.tipoEvento.trim()) newErrors.tipoEvento = "Tipo de evento é obrigatório.";
    if (!formData.horario) newErrors.horario = "Horário é obrigatório.";

    if (!formData.duracao.trim()) newErrors.duracao = "Duração é obrigatória.";
    else if (isNaN(Number(formData.duracao)) || Number(formData.duracao) <= 0)
      newErrors.duracao = "Duração inválida.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      setPopupMessage("Por favor, corrija os erros antes de solicitar orçamento.");
      setShowPopup(true);
      return;
    }

    try {
      const response = await fetch("api/event/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setPopupMessage("Orçamento enviado por e-mail com sucesso!");
        setShowPopup(true);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          data: "",
          local: "",
          convidados: "",
          tipoEvento: "",
          horario: "",
          duracao: "",
        });
        setErrors({});
      } else {
        setPopupMessage("Erro ao enviar orçamento.");
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setPopupMessage("Erro ao enviar orçamento.");
      setShowPopup(true);
    }
  };

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
              <InputField
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
              />
              {errors.nome && <ErrorText>{errors.nome}</ErrorText>}

              <label htmlFor="email">*E-mail:</label>
              <InputField
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}

              <label htmlFor="telefone">*Telefone:</label>
              <InputField
                type="tel"
                id="telefone"
                placeholder="Digite seu telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
              {errors.telefone && <ErrorText>{errors.telefone}</ErrorText>}

              <label htmlFor="data">*Data do evento:</label>
              <InputField
                type="date"
                id="data"
                value={formData.data}
                onChange={handleChange}
              />
              {errors.data && <ErrorText>{errors.data}</ErrorText>}
            </OrçamentoCard>

            <OrçamentoCard>
              <h3>Detalhes do Evento</h3>

              <label htmlFor="local">*Local:</label>
              <InputField
                type="text"
                id="local"
                placeholder="Onde será o evento?"
                value={formData.local}
                onChange={handleChange}
              />
              {errors.local && <ErrorText>{errors.local}</ErrorText>}

              <label htmlFor="convidados">*Número de Convidados:</label>
              <InputField
                type="number"
                id="convidados"
                placeholder="Quantidade de convidados"
                value={formData.convidados}
                onChange={handleChange}
              />
              {errors.convidados && <ErrorText>{errors.convidados}</ErrorText>}

              <label htmlFor="tipoEvento">*Tipo de Evento:</label>
              <InputField
                type="text"
                id="tipoEvento"
                placeholder="Qual o tipo de evento?"
                value={formData.tipoEvento}
                onChange={handleChange}
              />
              {errors.tipoEvento && <ErrorText>{errors.tipoEvento}</ErrorText>}

              <label htmlFor="horario">*Horário do evento:</label>
              <InputField
                type="time"
                id="horario"
                value={formData.horario}
                onChange={handleChange}
              />
              {errors.horario && <ErrorText>{errors.horario}</ErrorText>}

              <label htmlFor="duracao">*Duração (horas):</label>
              <InputField
                type="number"
                id="duracao"
                placeholder="Quantas horas de evento?"
                value={formData.duracao}
                onChange={handleChange}
              />
              {errors.duracao && <ErrorText>{errors.duracao}</ErrorText>}
            </OrçamentoCard>
          </OrçamentoContainer>

          <ButtonSubmit onClick={handleSubmit}>Enviar Orçamento</ButtonSubmit>
        </Container>
      </OrçamentoSection>
      <Footer />

      {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}
    </>
  );
}