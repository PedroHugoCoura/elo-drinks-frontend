import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer/index';
import { describe, expect, test, vi } from 'vitest';

vi.mock('./style', () => ({
  FooterWrapper: (props: any) => <div {...props} />,
  FooterContent: (props: any) => <div {...props} />,
  FooterLogo: (props: any) => <div {...props} />,
  FooterSection: (props: any) => <div {...props} />,
  FooterTitle: (props: any) => <h2 {...props} />,
  FooterText: (props: any) => <p {...props} />,
  SocialIcons: (props: any) => <div {...props} />,
  SocialIcon: (props: any) => <a {...props} />,
}));

vi.mock('../../style/container', () => ({
  Container: (props: any) => <div {...props} />,
}));

vi.mock('../Navbar/style', () => ({
  Logo: (props: any) => <img {...props} />,
}));

describe('Footer', () => {
  test('deve renderizar o logo', () => {
    render(<Footer />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  test('deve exibir informações de contato', () => {
    render(<Footer />);
    expect(screen.getByText('Contato')).toBeInTheDocument();
    expect(screen.getByText(/Telefone:/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail:/i)).toBeInTheDocument();
    expect(screen.getByText('Tel: 11 99466-3100')).toBeInTheDocument();
    expect(screen.getByText('atendimento@elodrinks.com.br')).toBeInTheDocument();
  });

  test('deve ter links para redes sociais', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);

    expect(links[0]).toHaveAttribute('href', 'https://www.facebook.com');
    expect(links[1]).toHaveAttribute('href', 'https://www.twitter.com');
    expect(links[2]).toHaveAttribute('href', 'https://www.instagram.com');
  });
});
