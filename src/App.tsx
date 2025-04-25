import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Drinks from './pages/Drinks/index';
import ServicesPage from './pages/Serviços';
import Orçamento from './pages/Orçamento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/orçamento" element={<Orçamento />} />
      </Routes>
    </Router>
  );
}

export default App;
