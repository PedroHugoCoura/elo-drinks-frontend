import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #4a3f35;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  a {
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 16px;
  }
`;

export const OrçamentoButton = styled.button`
  background-color: #d4af37;
  color: #4a3f35;
  font-weight: bold;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
`;
