import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "O debate acerca das noções de \"Intolerância Religiosa\" e \"Racismo Religioso\" para a compreensão da violência contra as Religiões Afro-brasileiras",
    journal: "Revista OQ",
    year: "2022",
    abstract: "Discussão sobre os conceitos de intolerância religiosa e racismo religioso como ferramentas analíticas para compreender a violência praticada contra as religiões de matriz africana no Brasil.",
    keywords: ["Intolerância Religiosa", "Racismo Religioso", "Religiões Afro-brasileiras"],
  },
  {
    title: "A questão da laicidade no Brasil: mosaico de configurações e arena de controvérsias",
    journal: "Horizonte — PUC Minas",
    year: "2017",
    abstract: "Análise das múltiplas configurações da laicidade no contexto brasileiro, examinando as controvérsias em torno da relação entre Estado, esfera pública e religião.",
    keywords: ["Laicidade", "Estado", "Esfera Pública"],
  },
  {
    title: "Estilos de Espiritualidade como Critério para Tipologias e Interpretações do Campo Religioso na Contemporaneidade",
    journal: "Ciências Sociais e Religião — Porto Alegre",
    year: "2016",
    abstract: "Proposta de utilização dos estilos de espiritualidade como critério analítico para a construção de tipologias e interpretações do campo religioso contemporâneo.",
    keywords: ["Espiritualidade", "Tipologias", "Campo Religioso"],
  },
];

const Artigos = () => {
  return (
    <div className="pt-24">
      {/* Page header */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
            Publicações
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Artigos Acadêmicos
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Contribuições acadêmicas publicadas em revistas científicas de referência.
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article, i) => (
              <article
                key={i}
                className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-sans font-medium text-accent uppercase tracking-wider">
                    {article.journal}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground font-sans">{article.year}</span>
                </div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  {article.abstract}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs font-sans text-muted-foreground bg-secondary px-2 py-1 rounded"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-1.5 text-sm font-sans font-medium text-accent hover:text-foreground transition-colors">
                  Ler artigo completo <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artigos;
