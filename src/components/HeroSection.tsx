import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-brown-deep/70" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold-light text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in font-sans font-medium">
            Prof. Marcelo Ayres Camurça · UFJF
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Religião, Sociedade <br />
            <span className="italic font-normal text-gold-light">&amp; Pensamento Crítico</span>
          </h1>
          <p
            className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in-up font-sans font-light leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
           Intelectual e pesquisador de destaque na Antropologia e Sociologia da Religião, referência nos estudos do campo religioso brasileiro, analisando as relações entre religião, espaço público, política e laicidade em perspectivas nacionais e comparadas
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/livros"
              className="px-8 py-3 bg-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold-light transition-colors"
            >
              Conhecer a Obra
            </Link>
            <Link
              to="/sobre"
              className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-sans font-medium text-sm uppercase tracking-wider rounded hover:bg-primary-foreground/10 transition-colors"
            >
              Sobre o Professor
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-gold-light to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
