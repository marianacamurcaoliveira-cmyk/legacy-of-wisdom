import { BookOpen, GraduationCap, Globe, Users } from "lucide-react";
import professorPhoto from "@/assets/professor-marcelo.jpg";

const stats = [
  { icon: BookOpen, value: "12+", label: "Livros Publicados" },
  { icon: GraduationCap, value: "50+", label: "Anos de Docência" },
  { icon: Globe, value: "30+", label: "Países Visitados" },
  { icon: Users, value: "5000+", label: "Alunos Formados" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="order-2 lg:order-none flex flex-col items-center gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg border border-border">
              <img
                src={professorPhoto}
                alt="Professor Marcelo Ayres Camurça"
                className="w-full max-w-md object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-serif text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-sans mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Text */}
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
              Sobre
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Marcelo Ayres Camurça <br />
              <span className="italic text-accent">Ciência da Religião</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                Professor Titular do Departamento de Ciência da Religião da Universidade
                Federal de Juiz de Fora (UFJF), Marcelo Ayres Camurça é uma das principais
                referências brasileiras no estudo das religiões, com pesquisas que abrangem
                laicidade, pluralismo religioso e espiritualidades contemporâneas.
              </p>
              <p>
                Pesquisador do CNPq e membro do ISER (Instituto de Estudos da Religião),
                sua trajetória acadêmica é marcada pela interlocução entre as Ciências Sociais
                e as Ciências da Religião, contribuindo para o avanço teórico e metodológico
                da área no Brasil.
              </p>
              <p>
                Autor de livros e dezenas de artigos científicos publicados em periódicos
                nacionais e internacionais, suas obras são referência obrigatória nos programas
                de pós-graduação em Ciência da Religião do país.
              </p>
            </div>
          </div>

          </div>
      </div>
    </section>
  );
};

export default AboutSection;
