import { BookOpen, GraduationCap, Globe, Users } from "lucide-react";
import professorPhoto from "@/assets/professor-marcelo.jpg";

const stats = [
  { icon: BookOpen, value: "12+", label: "Livros Publicados" },
  { icon: GraduationCap, value: "50+", label: "Anos de Docência" },
  { icon: Globe, value: "30+", label: "Países Visitados" },
  { icon: Users, value: "5000+", label: "Alunos Formados" },
];

const Sobre = () => {
  return (
    <div className="pt-24">
      {/* Page header */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
            Sobre
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Marcelo Ayres Camurça
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Ciência da Religião · UFJF
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col items-center gap-8">
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

            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6 leading-tight">
                Trajetória Acadêmica
              </h2>
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>
                  Professor Titular aposentado do Departamento de Ciência da Religião da Universidade
                  Federal de Juiz de Fora (UFJF), Marcelo Ayres Camurça é uma das principais
                  referências brasileiras no estudo das religiões, com pesquisas que abrangem
                  laicidade, pluralismo religioso, religião no espaço público e espiritualidades contemporâneas.
                </p>
                <p>
                  Pesquisador do CNPq, membro do ISER (Instituto de Estudos da Religião) e da
                  ABA (Associação Brasileira de Antropologia), sua trajetória acadêmica é marcada
                  pela interlocução entre as Ciências Sociais e as Ciências da Religião, contribuindo
                  para o avanço teórico e metodológico da área no Brasil.
                </p>
                <p>
                  Mesmo aposentado, continua atuante como pesquisador e escritor. É autor de obras
                  de referência como <em>Ciências Sociais e Ciências da Religião — Polêmicas e
                  Interlocuções</em> (Paulinas, 2008) e co-organizador da edição especial
                  "A religião no espaço público" da revista <em>Horizontes Antropológicos</em> (2018),
                  além de dezenas de artigos publicados em periódicos nacionais e internacionais.
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mt-10 mb-4">
                Áreas de Pesquisa
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Laicidade", "Pluralismo Religioso", "Religião no Espaço Público", "Espiritualidades Contemporâneas", "Religiões Afro-brasileiras", "Ciências Sociais da Religião", "Antropologia da Religião"].map((area) => (
                  <span
                    key={area}
                    className="text-xs font-sans font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mt-10 mb-4">
                Formação
              </h3>
              <div className="space-y-3 text-muted-foreground font-sans">
                <div className="border-l-2 border-accent/30 pl-4">
                  <p className="font-semibold text-foreground">Doutorado em Antropologia Social</p>
                  <p className="text-sm">Museu Nacional — UFRJ</p>
                </div>
                <div className="border-l-2 border-accent/30 pl-4">
                  <p className="font-semibold text-foreground">Mestrado em Ciências Sociais</p>
                  <p className="text-sm">IFCS — UFRJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
