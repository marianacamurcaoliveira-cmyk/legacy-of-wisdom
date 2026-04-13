import { BookOpen, GraduationCap, Globe, Users } from "lucide-react";
import professorPhoto from "@/assets/professor-marcelo.jpg";

const stats = [
  { icon: BookOpen, value: "Dezenas", label: "Publicações Acadêmicas" },
  { icon: GraduationCap, value: "25+", label: "Anos de Docência" },
  { icon: Globe, value: "Internacional", label: "Atuação Acadêmica" },
  { icon: Users, value: "Referência", label: "Na Área de Religião" },
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

          {/* Linha decorativa */}
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>

          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Antropologia e Sociologia da Religião · UFJF
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Foto + stats */}
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
                    <p className="font-serif text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground font-sans mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6 leading-tight">
                Trajetória Acadêmica
              </h2>

              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                
                <p>
                  <strong>Reconhecido como um dos principais estudiosos da religião no Brasil</strong>, 
                  Marcelo Camurça é Professor Titular do Departamento de Ciência da Religião da 
                  Universidade Federal de Juiz de Fora (UFJF).
                </p>

                <p>
                  Atua no Programa de Pós-Graduação em Ciência da Religião (PPCIR) por cerca de 
                  25 anos, onde se aposentou em 2018 e retornou como professor convidado.
                </p>

                <p>
                  Doutorou-se em 1994 no Programa de Pós-Graduação em Antropologia do Museu 
                  Nacional (UFRJ) e realizou pós-doutorado entre 2008-2009 no Groupe Sociétés, 
                  Religions, Laïcités (GSRL) da École Pratique des Hautes Études, em Paris.
                </p>

                <p>
                  Mesmo após a aposentadoria, permanece ativo como pesquisador e escritor, sendo 
                  autor de obras de referência como <em>Ciências Sociais e Ciências da Religião — 
                  Polêmicas e Interlocuções</em> (Paulinas, 2008), além de dezenas de artigos 
                  publicados em periódicos nacionais e internacionais.
                </p>

                <p>
                  Dedica-se aos estudos de <strong>Antropologia e Sociologia da Religião</strong>, 
                  com foco no <strong>Campo Religioso Brasileiro</strong> e na relação entre 
                  <strong> religião e espaço público</strong>.
                </p>

                <p>
                  Seus principais temas de pesquisa incluem Catolicismo, Espiritismo, 
                  neo-esoterismos religiosos, religião e política, laicidade e as relações entre 
                  Ciências Sociais e Ciências da Religião, com abordagens tanto no contexto 
                  brasileiro quanto em perspectivas comparadas com a América Latina e a França.
                </p>
              </div>

              {/* Áreas */}
              <h3 className="font-serif text-xl font-bold text-foreground mt-10 mb-4">
                Áreas de Pesquisa
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Catolicismo",
                  "Espiritismo",
                  "Neo-esoterismos Religiosos",
                  "Religião e Política",
                  "Laicidade",
                  "Ciências Sociais e Ciências da Religião",
                  "Campo Religioso Brasileiro",
                  "Religião e Espaço Público",
                ].map((area) => (
                  <span
                    key={area}
                    className="text-xs font-sans font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>

       {/* Formação */}
<h3 className="font-serif text-xl font-bold text-foreground mt-10 mb-4">
  Formação
</h3>

<div className="space-y-3 text-muted-foreground font-sans">
  
  <div className="border-l-2 border-accent/30 pl-4">
    <p className="font-semibold text-foreground">Pós-Doutorado</p>
    <p className="text-sm">
      GSRL — École Pratique des Hautes Études, Paris (2008-2009)
    </p>
  </div>

  <div className="border-l-2 border-accent/30 pl-4">
    <p className="font-semibold text-foreground">
      Doutorado em Antropologia Social
    </p>
    <p className="text-sm">Museu Nacional — UFRJ (1994)</p>
  </div>

  <div className="border-l-2 border-accent/30 pl-4">
    <p className="font-semibold text-foreground">
      Mestrado em Sociologia
    </p>
    <p className="text-sm">
      Universidade Federal do Ceará (1987)
    </p>
  </div>

  <div className="border-l-2 border-accent/30 pl-4">
    <p className="font-semibold text-foreground">
      Graduação em História
    </p>
    <p className="text-sm">
      Universidade Federal do Ceará (1983)
    </p>
  </div>
</div>
      </section>
    </div>
  );
};

export default Sobre;
