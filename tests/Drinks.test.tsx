import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Drinks from '../src/pages/Drinks/index';
import { describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';


vi.mock('../../components/Navbar/navbar', () => ({
  default: () => <div>Mock Navbar</div>,
}));
vi.mock('../../components/FloatingButton/floatingbutton', () => ({
  default: () => <div>Mock WhatsApp Button</div>,
}));
vi.mock('../../components/Footer', () => ({
  default: () => <div>Mock Footer</div>,
}));

describe('Drinks Page', () => {
  test('deve renderizar o título da seção', () => {
    render(
      <MemoryRouter>
        <Drinks />
      </MemoryRouter>
    );
    expect(screen.getByText('Bem-vindo ao nosso cardápio de drinks')).toBeInTheDocument();
  });

  test('deve exibir os drinks mockados', async () => {
    render(
      <MemoryRouter>
        <Drinks />
      </MemoryRouter>
    );
    expect(await screen.findByText('Caipirinha')).toBeInTheDocument();
    expect(await screen.findByText('Mojito')).toBeInTheDocument();
  });

  test('deve filtrar drinks com busca', async () => {
    render(
      <MemoryRouter>
        <Drinks />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText('Buscar por nome...');
    fireEvent.change(searchInput, { target: { value: 'mojito' } });

    expect(await screen.findByText('Mojito')).toBeInTheDocument();
    expect(screen.queryByText('Caipirinha')).not.toBeInTheDocument();
  });
});
