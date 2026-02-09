const Footer = () => {
  return (
    <footer className="py-12 bg-brown-deep text-primary-foreground/70">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg text-primary-foreground">
            Prof. <span className="text-gold-light">Scholar</span>
          </p>
          <p className="text-sm font-sans">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
