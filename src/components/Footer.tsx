import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-brown-deep text-primary-foreground/70">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-serif text-lg text-primary-foreground">
            Prof. <span className="text-gold-light">Camurça</span>
          </Link>
          <nav className="flex items-center gap-6">
            {[
              { label: "Sobre", to: "/sobre" },
              { label: "Livros", to: "/livros" },
              { label: "Artigos", to: "/artigos" },
              { label: "Contato", to: "/contato" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-sans text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm font-sans">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
