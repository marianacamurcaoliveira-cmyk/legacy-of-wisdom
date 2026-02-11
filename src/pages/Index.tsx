import HeroSection from "@/components/HeroSection";
import { BookOpen, GraduationCap, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import professorPhoto from "@/assets/professor-marcelo.jpg";

const highlights = [
  { icon: BookOpen, value: "12+", label: "Livros Publicados" },
  { icon: GraduationCap, value: "50+", label: "Anos de Docência" },
  { icon: Globe, value: "30+", label: "Países Visitados" },
  { icon: Users, value: "5000+", label: "Alunos Formados" },
];

const Index = () => {
  return (
    <>
      <HeroSection />

      {/* Quick intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg border border-border">
              <img
                src={professorPhoto}
                alt="Professor Marcelo Ayres Camurça"
                className="w-full max-w-md mx-auto object-cover"
              />
            </div>
            <div>
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
                Sobre o Professor
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Marcelo Ayres Camurça
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Professor Titular do Departamento de Ciência da Religião da Universidade
                Federal de Juiz de Fora (UFJF), é uma das principais referências brasileiras
                no estudo das religiões, com pesquisas que abrangem laicidade, pluralismo
                religioso e espiritualidades contemporâneas.
              </p>
              <Link
                to="/sobre"
                className="inline-block px-8 py-3 bg-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded hover:bg-accent/90 transition-colors"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {highlights.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-serif text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links to other pages */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Explore o Trabalho Acadêmico
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { to: "/livros", title: "Livros", desc: "Conheça as obras publicadas pelo professor." },
              { to: "/artigos", title: "Artigos", desc: "Publicações em revistas científicas de referência." },
              { to: "/contato", title: "Contato", desc: "Redes sociais e formas de entrar em contato." },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
