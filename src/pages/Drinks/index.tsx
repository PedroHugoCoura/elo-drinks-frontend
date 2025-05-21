import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import FloatingButtonWhatsApp from "../../components/FloatingButton/floatingbutton";
import { Row, Col, Input, Select, Spin } from "antd";
import {
  DrinksWrapper,
  SectionTitle,
  DrinkWrapper,
  InfoOverlay,
  RowWrapper,
  ColWrapper,
} from "./style";
import Footer from "../../components/Footer";

interface Drink {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  is_open_letter: boolean;
  price: string;
  available: boolean;
  category: number;
}

const { Option } = Select;

export default function Drinks() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const mockData = [
    {
      id: 1,
      name: "Caipirinha",
      description: "Drink típico brasileiro",
      ingredients: "Limão, Cachaça, Açucar e Gelo",
      is_open_letter: true,
      price: "15.00",
      available: true,
      category: 1,
    },
    {
      id: 2,
      name: "Mojito",
      description: "Drink refrescante de origem cubana",
      ingredients: "Hortelã, Rum, Açúcar, Limão e Água com gás",
      is_open_letter: true,
      price: "18.00",
      available: true,
      category: 1,
    },
    {
      id: 3,
      name: "Piña Colada",
      description: "Coquetel tropical clássico",
      ingredients: "Rum, Leite de coco, Suco de abacaxi e Gelo",
      is_open_letter: true,
      price: "22.00",
      available: true,
      category: 1,
    },
    {
      id: 4,
      name: "Gin Tônica",
      description: "Clássico drink com gin e água tônica",
      ingredients: "Gin, Água tônica, Limão e Gelo",
      is_open_letter: true,
      price: "20.00",
      available: true,
      category: 1,
    },
    {
      id: 5,
      name: "Bloody Mary",
      description: "Drink picante com suco de tomate",
      ingredients: "Vodka, Suco de tomate, Limão, Pimenta e Molho inglês",
      is_open_letter: true,
      price: "19.00",
      available: true,
      category: 1,
    },
    {
      id: 6,
      name: "Smoothie de Morango",
      description: "Bebida cremosa e doce com morangos frescos",
      ingredients: "Morango, Iogurte natural, Mel e Gelo",
      is_open_letter: false,
      price: "12.00",
      available: true,
      category: 3,
    },
    {
      id: 7,
      name: "Água com Gás",
      description: "Água gaseificada gelada",
      ingredients: "Água gaseificada",
      is_open_letter: false,
      price: "5.00",
      available: true,
      category: 3,
    },
    {
      id: 8,
      name: "Suco de Laranja",
      description: "Suco natural de laranja",
      ingredients: "Laranja espremida e gelo",
      is_open_letter: false,
      price: "8.00",
      available: true,
      category: 3,
    },
    {
      id: 9,
      name: "Moscow Mule",
      description: "Drink refrescante com toque de gengibre e espuma personalizada",
      ingredients: "Vodka, xarope de gengibre, limão taiti e espuma de gengibre",
      is_open_letter: true,
      price: "20.00",
      available: true,
      category: 1,
    },
    {
      id: 10,
      name: "Basil Smash",
      description: "Drink herbal com notas cítricas e manjericão fresco",
      ingredients: "Gin, suco de limão siciliano, syrup de manjericão e folhas de manjericão",
      is_open_letter: true,
      price: "22.00",
      available: true,
      category: 1,
    },
    {
      id: 11,
      name: "Penicilin",
      description: "Drink com whisky, limão e toque picante de gengibre",
      ingredients: "Whisky, suco de limão siciliano, xarope de gengibre e limão desidratado",
      is_open_letter: true,
      price: "23.00",
      available: true,
      category: 1,
    },
    {
      id: 12,
      name: "Fitzgerald",
      description: "Clássico coquetel cítrico e aromático com bitters",
      ingredients: "Gin, syrup de açúcar, suco de limão siciliano e angostura bitters",
      is_open_letter: true,
      price: "21.00",
      available: true,
      category: 1,
    },
    {
      id: 13,
      name: "Classic Tonic",
      description: "Gin tônica clássico com zimbro e limão siciliano",
      ingredients: "Gin, limão siciliano, zimbro e tônica",
      is_open_letter: true,
      price: "20.00",
      available: true,
      category: 1,
    },
    {
      id: 14,
      name: "Bar de Caipirinhas",
      description: "Variedade de caipirinhas com vodka, saquê e cachaça",
      ingredients: "Vodka, saquê, cachaça, abacaxi com hortelã, uva com manjericão, kiwi com limão",
      is_open_letter: true,
      price: "25.00",
      available: true,
      category: 1,
    },
    {
      id: 15,
      name: "Cirque Blue",
      description: "Drink azul vibrante com algodão doce ou bolha de fumaça",
      ingredients: "Curaçau blue, suco de blueberry, amora, mix de limão, água com gás e algodão doce ou bolha de fumaça",
      is_open_letter: false,
      price: "18.00",
      available: true,
      category: 3,
    },
    {
      id: 16,
      name: "Pink Lemonade",
      description: "Pink Lemonade servida em lâmpadas brilhantes",
      ingredients: "Mix de limão, água com gás e syrup de romã",
      is_open_letter: false,
      price: "16.00",
      available: true,
      category: 3,
    },
    {
      id: 17,
      name: "Pina Descolada",
      description: "Versão não alcoólica da Piña Colada com toque divertido",
      ingredients: "Suco de abacaxi, leite de coco, leite condensado e granulado colorido",
      is_open_letter: false,
      price: "15.00",
      available: true,
      category: 3,
    },
    {
      id: 18,
      name: "Lichia Paradise",
      description: "Drink leve e refrescante com lichia e hortelã",
      ingredients: "Água com gás, xarope simples, lichia, suco de limão e hortelã",
      is_open_letter: false,
      price: "14.00",
      available: true,
      category: 3,
    },
    {
      id: 19,
      name: "Sonho Brilhante",
      description: "Espumante sem álcool com algodão doce rosa mágico",
      ingredients: "Espumante sem álcool e algodão doce rosa mágico",
      is_open_letter: false,
      price: "17.00",
      available: true,
      category: 3,
    },
  ];

  const categories = {
    1: "Drinks Alcoólicos",
    3: "Drinks Não Alcoólicos",
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/drink/drinks/")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        setDrinks(data.results);
        setIsLoading(false);
      })
      .catch(() => {
        setDrinks(mockData);
        setIsLoading(false);
      });
  }, []);

  const normalize = (text: string) =>
    text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const filteredDrinks = drinks.filter((drink) => {
    const matchesSearch = normalize(drink.name).includes(normalize(searchTerm));
    const matchesCategory =
      selectedCategory === "all" || String(drink.category) === selectedCategory;
    return drink.available && matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <DrinksWrapper>
        <SectionTitle>Bem-vindo ao nosso cardápio de drinks</SectionTitle>

        <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
          <Col xs={24} sm={12}>
            <Input
              placeholder="Buscar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col xs={24} sm={12}>
            <Select
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
              style={{ width: "100%" }}
            >
              <Option value="all">Todas as categorias</Option>
              {Object.entries(categories).map(([key, name]) => (
                <Option key={key} value={key}>
                  {name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>

        {isLoading ? (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Spin size="large" tip="Carregando drinks..." />
          </div>
        ) : (
          <RowWrapper>
            {filteredDrinks.map((drink) => (
              <ColWrapper key={drink.id}>
                <DrinkWrapper>
                  <img
                    alt={drink.name}
                    src={`${drink.name.toLowerCase().replace(/\s/g, "")}.jpg`}
                  />
                  <h3>{drink.name}</h3>
                  <p>{drink.description}</p>
                  <InfoOverlay>
                    <p>Ingredientes:</p>
                    <ul>
                      {drink.ingredients.split(",").map((ingredient, idx) => (
                        <li key={idx}>{ingredient.trim()}</li>
                      ))}
                    </ul>
                  </InfoOverlay>
                </DrinkWrapper>
              </ColWrapper>
            ))}
          </RowWrapper>
        )}
      </DrinksWrapper>
      <FloatingButtonWhatsApp />
      <Footer />
    </>
  );
}