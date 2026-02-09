import { ExternalLink } from "lucide-react";

const books = [
  {
    title: "O Sagrado e o Profano na Modernidade",
    year: "2018",
    description: "Uma análise profunda sobre como as sociedades contemporâneas reinterpretam conceitos religiosos fundamentais.",
    category: "Sociologia da Religião",
  },
  {
    title: "Diálogos Inter-religiosos: Caminhos para a Paz",
    year: "2014",
    description: "Propostas concretas para o diálogo entre diferentes tradições de fé no contexto brasileiro.",
    category: "Ecumenismo",
  },
  {
    title: "Teologia e Filosofia: Encontros e Desencontros",
    year: "2009",
    description: "Uma investigação sobre as relações históricas entre pensamento teológico e filosófico ocidental.",
    category: "Teologia",
  },
  {
    title: "Religiões do Mundo: Uma Introdução",
    year: "2003",
    description: "Manual introdutório sobre as grandes tradições religiosas, adotado em universidades de todo o Brasil.",
    category: "Introdução",
  },
  {
    title: "Mística e Racionalidade",
    year: "1995",
    description: "Estudo pioneiro sobre a relação entre experiência mística e pensamento racional na tradição cristã.",
    category: "Mística",
  },
  {
    title: "A Fé na Era da Informação",
    year: "2021",
    description: "Como as novas tecnologias e mídias sociais transformam a vivência religiosa no século XXI.",
    category: "Contemporâneo",
  },
];

const BooksSection = () => {
  return (
    <section id="livros" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
            Biblioteca
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Livros Publicados
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Uma seleção das principais obras que marcaram o estudo das religiões no Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <article
              key={book.title}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {book.category}
                </span>
                <span className="text-sm text-muted-foreground font-sans">{book.year}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {book.description}
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-sm font-sans font-medium text-accent hover:text-foreground transition-colors">
                  <ExternalLink size={14} />
                  Saiba mais
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
