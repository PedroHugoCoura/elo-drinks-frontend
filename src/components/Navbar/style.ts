import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const NavbarWrapper = styled(Header)`
  background-color: #5A5040;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 90px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 60px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavMenu = styled(Menu)`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  & > li {
    margin: 0 24px;
    font-size: 17px;
    font-weight: bold;
    color: white !important;
    letter-spacing: 1px;

    &:hover {
      color: #E0CEAA !important;
      background-color: transparent !important;
    }

    &.ant-menu-item-selected {
      color: #d4af37 !important;
    }
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

