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
    href: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4786439H3&tokenCaptchar=0cAFcWeA51Hsdo_8IcrSHe1-iNQGlbwP3mE0uLbw8t2mCI7axw-jFapn-3ZhL1MEoMHURRdcvNOq4KSIWyEoAZVAyJFtkRz_r_pFrtz9v4nv50x1LbSrh2C-amw3h0-q4AcOC6MtmYdW5IXK7LBTOnDnB639mFqrlanu_ubr6TE8dzl2UgiJMK9wlBoZK1E-_0ol3dUU8mRMJGQjeQNMXZjqeelrsMD-ePfmGWCNmraerAcm57xR-ZfhBh8K8WiI5BHlzO8gY93dyemlPnwTW9jc9v_WuMha_WFYhrSEKoZSSxmWqwWEMChnOh7DyjHd7yyRWTZDl_NrjdM1jNCUm3bM_B-CSStMoV22BaFzWjvOEpWYVnvrNH-jsHCJTtq1HVLatUrwEiM_d1Srm4rRQpnpjkXnEWQl5Lo3Oq0CbiRSdXPmMUPrAjmO35DpSrpuLWYYzrkLvPnMVLreqhHbl4mHUANqKW5KUuWOYqxu_IZ-Vs8MQOuyT3yM5LzpqmdHJsMglgYtTF3O3qvgF4NePBJ0B9Hu5CWVPQ886imwzJyVvShDMwPasqe_ryln4NGzvrtcIltWHbofgHVQtnzcv9fd-EXXVOXDc1TeVYD5yJL_MG_ZPcsjCIOAJNi6egq0CflDPYDugS6RFEvZa9NLIcxlk8OYeVdmHrPokX5khlbk-vHKSlPf4LxCtjhouXQAfHT6YPnAdOKxapPIIIuyRV7_iA9emwGTUUhB91hz74jwvzAmhwuniaXvmNB1PtNtOufRiRimTyjAtyZN1Zf0iIompRtDtfBn6HGzxiMij3CruqJCfWJtZOxZ0Aq415DWGndHRs55RbaL7GGFdMWVHh37g62jl-Izqc5MOK-4TRyAsCiYipFl3scI-p2u8-FaL5MqecLaJMRT9N_haq7cMTi498JxRx9QZSYT9ELcjyJpk67dH4BPocB7-P_slfhLOKKAFhrRoiRPiFaLQtzDRpSG-J8ai2TuIKZBKtC8Lq7vm8hjZjq3yaOhZ408U__or9RX2dVSnCcksZ_qbrc-zvq0S4VP9q8YT7j1DCVgJPrJGyYa6zNmb9Xe6GnFxHneIvyBf-QPUEYF6ylZqSKBbOrvzzWqdW9H1aQyfNQBvz_JchpWxsrwmCzEstnk84N5YQr49-fsz_a7MJfgnNqr8mB53Hg6FB51ahEldPDtxeqI0tlDSVwrm4EgVtHbCTFGqdrRh4kbNYBnzb6Mk5WPb0f0UJ1CwX35d7jplRwi3O-CqA6gFuMefJyYrCLHOGuK8SluxY6vxo9WJbafOUrqdf3-GAa3J3xVjVqf_9aQ9xS6eZx5cBUAITmKI50NyO-Dkp6rpzDUodneDAA5_e9H-fEB4mPD-w4rkKirHpdpmIH2kLmiLxakP7cRMqYUKYL0E_i4Cl9jqmTPC1Nd5FcV86-GfZH9NxijgqoQywu9mBaJzPZx7ougDG9kMKcyVWJA_KOvJRZ2hX5xGCUc7xXiyKWa1BShwSbEgNtMlhYdyWwovZBbE_Tw_7ylVNvlEoNbx3oyDtVd8Pr6TI-XdVZ8jprnQ8e-qPIH9eqqCk9rN2UTrU5AcVHPn9pLK1AIuP42XM3dslO_rcVrOJtVLzVDv_drbv3kpUNk7DMI2-nd9hkfPp2hUsAX_TL4Z-H25KvBTqqdG3W8KREWum_RmY6JDdxIbuibE8SawAI36XEp1MA_nBK-uwf4z9Um53U-Org7ZZ6OfOYAHin3P2_6S3vDaJ0nQkiRu7qKxMWL_PB64BXB0PDTIGGOG5BNQiZFO6KupQlL0wOJKhZiwklPN3XYBsjIKv498nSXlESYXDqqv5a0CLCVptGwtiS8qwLp4qBLEICP6qlfT2Ib7sP9jgW6u5foQX_78_1cbOFAmXoBBsXwCqLkZDWH0b3c2RO2QTkFgYyUqtueH_nPnVRD5YYo9uNYcuRLY5kYAWaxJXi-g4IjIK8xMFZCDR3PjsPpzw-85tb65zbv1PyMxJGwKTa4eZP4x_ACMPhVUDmvF7KFjGnJC1Lj1L3oqFCtqj6aJ-MqlEp-KYZQzu7Hmo06KNLl3TnO3yc4aNXsn1KVnsTNU8QHXR1G54drepCAyQRY5La3lICckDxLyErgKlbyMKqfSeQh0vUNOXFXXEYjNZAMAnHuy8Y22ppGEBvEzpSHZc-xHtR5pPs-IdIQYXfedz6fK127D-VkXhmP0yX4VtR0xDU43mrRVOL_FqRmgwoGZFf7EqZgRaERcsV_cq",
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
