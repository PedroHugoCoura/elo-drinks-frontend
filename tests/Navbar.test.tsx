import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../src/components/Navbar/navbar';
import { describe, expect, test, vi } from 'vitest';

vi.mock('./style', () => ({
  NavbarWrapper: (props: any) => <div {...props} />,
  NavbarContent: (props: any) => <div {...props} />,
  NavMenu: (props: any) => <div {...props} />,
  Logo: (props: any) => <img {...props} />,
}));

describe('Navbar', () => {
  test('deve renderizar o logo e os links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Drinks')).toBeInTheDocument();
    expect(screen.getByText('Serviços')).toBeInTheDocument();
    expect(screen.getByText('Orçamento')).toBeInTheDocument();
  });

  test('deve marcar "Home" como selecionado na rota "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Home').closest('li')).toHaveClass('ant-menu-item-selected');
  });

  test('deve marcar "Drinks" como selecionado na rota "/drinks"', () => {
    render(
      <MemoryRouter initialEntries={['/drinks']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Drinks').closest('li')).toHaveClass('ant-menu-item-selected');
  });

  test('deve marcar "Serviços" como selecionado na rota "/services"', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Serviços').closest('li')).toHaveClass('ant-menu-item-selected');
  });

  test('deve marcar "Orçamento" como selecionado na rota "/orçamento"', () => {
    render(
      <MemoryRouter initialEntries={['/orçamento']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Orçamento').closest('li')).toHaveClass('ant-menu-item-selected');
  });
});
