const contacts = [
  {
    icon: "wa",
    label: "WhatsApp",
    value: "(32) 99883-5397",
    href: "https://wa.me/5532998835397?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.",
    external: true,
  },
  {
    icon: "ig",
    label: "Instagram",
    value: "@jotta.engenharia.j",
    href: "https://instagram.com/jotta.engenharia.j",
    external: true,
  },
  {
    icon: "mail",
    label: "E-mail",
    value: "jandersonluisprojetos@hotmail.com",
    href: "mailto:jandersonluisprojetos@hotmail.com",
    external: false,
  },
  {
    icon: "pin",
    label: "Endereço",
    value: "Galeria General Roberto Neves, 30 – 2º andar, sala 208\nRua Halfeld, Centro – Juiz de Fora/MG",
    href: "https://maps.google.com/?q=Rua+Halfeld+Galeria+General+Roberto+Neves+Juiz+de+Fora+MG",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#161616] relative">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase font-sans">Fale conosco</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Entre em <span className="gradient-gold">Contato</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-xl mx-auto font-sans">
            Estamos prontos para atender você. Escolha o canal de sua preferência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="card-dark rounded-2xl p-6 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-[#c9a84c40] group-hover:border-[#c9a84c] transition-colors" style={{background:"#c9a84c12"}}>
                <ContactIcon type={c.icon} />
              </div>
              <span className="text-xs text-[#c9a84c] font-semibold tracking-widest uppercase mb-2 font-sans">{c.label}</span>
              <span className="text-[#aaaaaa] text-sm font-sans whitespace-pre-line leading-relaxed">{c.value}</span>
            </a>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#2e2e2e]" style={{height:"380px"}}>
          <iframe
            title="Localização Jotta Engenharia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d-43.3503!3d-21.7642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzUxLjEiUyA0M8KwMjEnMDEuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{border:0, filter:"invert(90%) hue-rotate(180deg)"}}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ type }: { type: string }) {
  const cls = "w-5 h-5 text-[#c9a84c]";
  if (type === "wa") return (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
  if (type === "ig") return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
  if (type === "mail") return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );
  return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
