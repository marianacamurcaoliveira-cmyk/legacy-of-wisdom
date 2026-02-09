import { BookOpen, GraduationCap, Globe, Users } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
              Sobre
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Uma vida dedicada ao <br />
              <span className="italic text-accent">estudo das religiões</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                Com mais de cinco décadas de atuação acadêmica, o professor se consolidou
                como uma das principais referências no estudo comparado das religiões no Brasil.
                Sua trajetória é marcada pelo compromisso com o diálogo inter-religioso e a
                compreensão profunda das tradições de fé.
              </p>
              <p>
                Formado em Teologia e Filosofia, com doutorado em Ciências da Religião,
                dedicou sua carreira a construir pontes entre diferentes tradições religiosas,
                sempre com rigor acadêmico e respeito às diversidades.
              </p>
              <p>
                Autor de diversos livros e artigos científicos, suas obras são referência
                obrigatória em cursos de graduação e pós-graduação em todo o país.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-serif text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
