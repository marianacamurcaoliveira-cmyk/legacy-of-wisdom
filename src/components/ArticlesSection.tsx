import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "A Secularização Revisitada: Novos Paradigmas para o Estudo da Religião",
    journal: "Revista Brasileira de Ciências da Religião",
    year: "2023",
    abstract: "Este artigo revisita o debate sobre secularização à luz de dados recentes sobre o crescimento religioso no Sul Global.",
  },
  {
    title: "O Pentecostalismo e a Transformação Social no Brasil",
    journal: "Estudos Avançados — USP",
    year: "2022",
    abstract: "Análise do impacto do movimento pentecostal nas dinâmicas sociais e políticas brasileiras nas últimas décadas.",
  },
  {
    title: "Diálogo Inter-religioso e Direitos Humanos",
    journal: "Horizonte — PUC Minas",
    year: "2021",
    abstract: "Uma reflexão sobre como o diálogo entre religiões pode contribuir para a promoção dos direitos humanos universais.",
  },
  {
    title: "Mística Cristã e Tradições Orientais: Pontos de Convergência",
    journal: "Numen — UFJF",
    year: "2020",
    abstract: "Estudo comparativo entre a mística cristã medieval e práticas contemplativas do budismo e hinduísmo.",
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
