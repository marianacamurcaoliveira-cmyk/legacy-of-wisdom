import { ExternalLink } from "lucide-react";

const books = [
  {
    title: "Ciências Sociais e Ciências da Religião: Polêmicas e Interlocuções",
    year: "2008",
    publisher: "Editora Paulinas",
    pages: "150 páginas",
    isbn: "978-85-356-2161-7",
    description:
      "Parte da coleção Repensando a Religião, este livro examina as tensões e diálogos entre as Ciências Sociais e as Ciências da Religião como campos disciplinares.",
    category: "Epistemologia",
    details:
      "A obra propõe uma reflexão aprofundada sobre a legitimidade epistemológica das Ciências da Religião, discutindo sua autonomia frente às Ciências Sociais e contribuindo para o debate sobre a constituição do campo de estudo da religião no Brasil.",
    link: "https://www.amazon.com.br/Ci%C3%AAncias-Sociais-Religi%C3%A3o-Pol%C3%AAmicas-Interlocu%C3%A7%C3%B5es/dp/853562161X",
    linkText: "Ver na editora",
  },
  {
    title:
      'Os "Melhores Filhos do Povo"',
    year: "1994",
    publisher: "PPGAS – Museu Nacional",
    description:
      "Tese de doutorado defendida em 1994 no PPGAS do Museu Nacional.",
    category: "Antropologia",
    details:
      'Os "Melhores filhos do Povo" - Um estudo do ritual e do simbólico numa organização comunista: O caso do MR8.',
    link: "https://b88532cb-2d92-4689-b6a8-a135e2c9b5d4.filesusr.com/ugd/613bfc_924fad6176384d35a6c6433bed4e0167.pdf",
    linkText: "Acessar PDF",
  },
];

const Livros = () => {
  return (
    <div className="pt-24">
      {/* Page header */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
            Biblioteca
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Livros Publicados
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Uma seleção das principais obras que marcaram o estudo das religiões no Brasil.
          </p>
        </div>
      </section>

      {/* Books list */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {books.map((book) => (
              <article
                key={book.title}
                className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                  <span className="text-sm text-muted-foreground font-sans">
                    {book.year}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4 leading-snug group-hover:text-accent transition-colors">
                  {book.title}
                </h2>

                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  {book.description}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-sans mb-4">
                  <span>{book.publisher}</span>
                  {book.pages && <span>• {book.pages}</span>}
                  {book.isbn && <span>• ISBN: {book.isbn}</span>}
                </div>

                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {book.details}
                </p>

                <div className="mt-6 pt-4 border-t border-border">
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-sans font-medium text-accent hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    {book.linkText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Livros;
