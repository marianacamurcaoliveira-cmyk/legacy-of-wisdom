import { Youtube, Instagram, Mail, BookOpen } from "lucide-react";

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
  {
    icon: Mail,
    label: "E-mail",
    description: "Entre em contato para convites, parcerias e orientações acadêmicas.",
    href: "#",
    color: "hover:text-accent",
  },
];

const SocialSection = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-sans font-semibold">
            Conecte-se
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Redes &amp; Contato
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-sans">
            Acompanhe o trabalho do professor nas redes sociais e entre em contato.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={`group bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <social.icon
                className={`w-10 h-10 mx-auto mb-4 text-muted-foreground transition-colors ${social.color}`}
              />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
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
  );
};

export default SocialSection;
