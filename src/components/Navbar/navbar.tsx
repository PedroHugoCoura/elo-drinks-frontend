import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { NavbarWrapper, Logo, NavMenu, NavbarContent } from './style';

export default function Navbar() {
  const location = useLocation();

  const selectedKey = location.pathname === '/' ? 'home' :
                      location.pathname === '/drinks' ? 'drinks' :
                      location.pathname === '/services' ? 'services' :
                      location.pathname === '/orçamento' ? 'orçamento' :
                      '';

  return (
    <NavbarWrapper>
      <NavbarContent>
        <Logo src="logo.png" alt="Logo" />
      </NavbarContent>
      <NavMenu mode="horizontal" selectedKeys={[selectedKey]}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="drinks">
          <Link to="/drinks">Drinks</Link>
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="/services">Serviços</Link>
        </Menu.Item>
        <Menu.Item key="orçamento">
          <Link to="/orçamento">Orçamento</Link>
        </Menu.Item>
      </NavMenu>
    </NavbarWrapper>
  );
}
