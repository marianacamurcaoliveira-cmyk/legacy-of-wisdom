import { ExternalLink } from "lucide-react";

const books = [
  {
    title: "Ciências Sociais e Ciências da Religião: Polêmicas e Interlocuções",
    year: "2008",
    description: "Publicado pela Editora Paulinas (coleção Repensando a Religião), examina as tensões e diálogos entre as Ciências Sociais e as Ciências da Religião como campos disciplinares.",
    category: "Epistemologia",
  },
  {
    title: "Corpo, Emoção e Rito: Antropologia dos Carismáticos Católicos",
    year: "2003",
    description: "Estudo antropológico sobre o movimento carismático católico, analisando as dimensões corporais, emocionais e rituais dessa expressão religiosa no Brasil.",
    category: "Antropologia",
  },
  {
    title: "Questões de Religiões: Teorias e Metodologias",
    year: "2013",
    description: "Obra coletiva com capítulo do professor, reunindo reflexões teóricas e metodológicas sobre o estudo das religiões no Brasil.",
    category: "Metodologia",
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
