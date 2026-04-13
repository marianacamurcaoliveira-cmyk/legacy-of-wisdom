import { Youtube, Instagram, Mail, BookOpen, Globe } from "lucide-react";

const socialLinks = [
  {
    icon: Youtube,
    label: "YouTube",
    description: "Aulas, palestras e reflexões em vídeo sobre religiões e espiritualidade.",
    href: "#",
    color: "hover:text-red-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    description: "Pensamentos diários, citações e bastidores do trabalho acadêmico.",
    href: "#",
    color: "hover:text-pink-500",
  },
  {
    icon: BookOpen,
    label: "Lattes",
    description: "Currículo acadêmico completo na Plataforma Lattes do CNPq.",
    href: "#",
    color: "hover:text-blue-500",
  },
];

const Contato = () => {
  return (
    <div className="pt-24">
      {/* Page header */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
            Conecte-se
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Redes & Contato
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Acompanhe o trabalho do professor nas redes sociais e entre em contato.
          </p>
        </div>
      </section>

      {/* Contact highlight */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="mailto:mcamurca@terra.com.br"
                className="group flex items-center gap-4 bg-card border-2 border-accent/30 rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">E-mail</h3>
                  <p className="text-sm text-accent font-sans font-medium">mcamurca@terra.com.br</p>
                </div>
              </a>
              <a
                href="https://www2.ufjf.br/ppcir/contato/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-card border-2 border-accent/30 rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">PPCIR / UFJF</h3>
                  <p className="text-sm text-accent font-sans font-medium">www2.ufjf.br/ppcir/contato</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-10">Redes Sociais</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon
                  className={`w-12 h-12 mx-auto mb-4 text-muted-foreground transition-colors ${social.color}`}
                />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {social.label}
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {social.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
