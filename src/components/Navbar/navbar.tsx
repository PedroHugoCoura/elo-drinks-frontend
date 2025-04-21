import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, MenuContainer, OrçamentoButton } from './style';

export default function Navbar() {
  return (
    <NavbarContainer>
      <MenuContainer>
        <Link to="/">HOME</Link>
        <Link to="/drinks">DRINKS</Link>
      </MenuContainer>
      <Logo src="/logo.png" alt="Elo Drinks" />
      <MenuContainer>
        <Link to="/services">SERVIÇOS</Link>
        <OrçamentoButton>Orçamento</OrçamentoButton>
      </MenuContainer>
    </NavbarContainer>
  );
}
