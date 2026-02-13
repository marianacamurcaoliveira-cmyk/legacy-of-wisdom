import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Os fluxos da direita religiosa católica para o Brasil a partir dos EUA de Trump e do entorno tradicionalista do Vaticano",
    journal: "Revista Brasileira de História das Religiões (ANPUH)",
    year: "2023",
    abstract: "Análise dos fluxos ideológicos da direita religiosa católica dos EUA e do Vaticano tradicionalista para o Brasil.",
  },
  {
    title: "O debate acerca das noções de \"Intolerância Religiosa\" e \"Racismo Religioso\" para a compreensão da violência contra as Religiões Afro-brasileiras",
    journal: "Revista OQ",
    year: "2022",
    abstract: "Discussão sobre os conceitos de intolerância religiosa e racismo religioso como ferramentas para compreender a violência contra as religiões afro-brasileiras.",
  },
  {
    title: "Estado laico e dinâmicas religiosas no Brasil: tensões e dissonâncias",
    journal: "Horizonte — PUC Minas",
    year: "2020",
    abstract: "Exame das tensões na relação entre o Estado laico e as dinâmicas religiosas no Brasil contemporâneo.",
  },
  {
    title: "A questão da laicidade no Brasil: mosaico de configurações e arena de controvérsias",
    journal: "Horizonte — PUC Minas",
    year: "2017",
    abstract: "Análise das múltiplas configurações da laicidade no contexto brasileiro e suas controvérsias.",
  },
];

const ArticlesSection = () => {
  return (
    <section id="artigos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
            Publicações
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Artigos Recentes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Contribuições acadêmicas publicadas em revistas científicas de referência.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group border-l-2 border-accent/30 hover:border-accent pl-6 py-4 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-sans font-medium text-accent uppercase tracking-wider">
                  {article.journal}
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground font-sans">{article.year}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {article.abstract}
              </p>
              <button className="mt-3 flex items-center gap-1.5 text-sm font-sans font-medium text-accent hover:text-foreground transition-colors">
                Ler artigo <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
