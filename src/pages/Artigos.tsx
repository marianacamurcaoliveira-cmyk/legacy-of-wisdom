import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "“Tutti Fratelli, ma non troppo”: religião e política na Igreja Católica contemporânea",
    journal: "Revista Acadêmica",
    year: "2025",
    abstract:
      "Análise das tensões entre universalismo e conservadorismo no interior da Igreja Católica, com foco nas disputas políticas contemporâneas.",
    keywords: ["Catolicismo", "Política", "Religião"],
  },
  {
    title: "Um quantitativo inspirado e temperado pelo qualitativo",
    journal: "Revista Acadêmica",
    year: "2025",
    abstract:
      "Reflexão metodológica sobre a articulação entre abordagens quantitativas e qualitativas nos estudos de religião.",
    keywords: ["Metodologia", "Pesquisa", "Religião"],
  },
  {
    title: "Ativismo cristão juvenil de extrema direita no Brasil: o caso Nikolas Ferreira",
    journal: "Revista Acadêmica",
    year: "2025",
    abstract:
      "Estudo sobre o crescimento do ativismo cristão juvenil conservador no Brasil e suas conexões com a política contemporânea.",
    keywords: ["Extrema Direita", "Juventude", "Cristianismo"],
  },
  {
    title: "O que é a antropologia do cristianismo",
    journal: "Revista Acadêmica",
    year: "2024",
    abstract:
      "Discussão conceitual sobre o campo da antropologia do cristianismo e suas contribuições para o estudo das religiões.",
    keywords: ["Antropologia", "Cristianismo", "Teoria"],
  },
  {
    title: "O consórcio religioso na arena pública no Brasil",
    journal: "Revista Acadêmica",
    year: "2024",
    abstract:
      "Análise das alianças e disputas entre diferentes grupos religiosos na esfera pública brasileira.",
    keywords: ["Religião", "Política", "Esfera Pública"],
  },
  {
    title: "Defesa religiosa da castidade ou feminicídio: o caso da Beata Benigna (CE)",
    journal: "Revista Acadêmica",
    year: "2024",
    abstract:
      "Investigação sobre narrativas religiosas e violência de gênero no contexto da devoção popular no Ceará.",
    keywords: ["Religião", "Gênero", "Violência"],
  },
  {
    title: "Democracia e diversidade na Igreja Católica",
    journal: "Revista Acadêmica",
    year: "2024",
    abstract:
      "Reflexão sobre os desafios da diversidade e pluralismo no interior da Igreja Católica contemporânea.",
    keywords: ["Democracia", "Catolicismo", "Diversidade"],
  },
  {
    title: "Sonho e profecia no universo evangélico-pentecostal brasileiro",
    journal: "Revista Acadêmica",
    year: "2024",
    abstract:
      "Estudo das experiências de sonho e profecia no campo evangélico-pentecostal no Brasil.",
    keywords: ["Pentecostalismo", "Profecia", "Religião"],
  },
];

const Artigos = () => {
  return (
    <div className="pt-24">
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
            Publicações
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Artigos Acadêmicos
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Produção recente nas áreas de antropologia e ciências da religião.
          </p>
        </div>
      </section>

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
                  <span className="text-xs text-muted-foreground font-sans">
                    {article.year}
                  </span>
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
