const pillars = [
  { icon: "🏆", title: "Qualidade Técnica", desc: "Projetos elaborados com rigor técnico e em total conformidade com as normas ABNT e legislação vigente." },
  { icon: "⏱️", title: "Pontualidade", desc: "Comprometimento com os prazos estabelecidos em contrato, sem abrir mão da excelência na entrega." },
  { icon: "🔐", title: "Responsabilidade", desc: "Todos os serviços acompanhados de ART (Anotação de Responsabilidade Técnica) pelo profissional habilitado." },
  { icon: "🤝", title: "Atendimento Humanizado", desc: "Escutamos suas necessidades e apresentamos as melhores soluções técnicas para o seu projeto." },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#161616] relative">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase font-sans">Quem somos</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Engenharia que <span className="gradient-gold">transforma</span> projetos em realidade
            </h2>
            <p className="text-[#888888] text-base leading-relaxed mb-5 font-sans">
              A <strong className="text-white">Jotta Engenharia Projetos e Empreendimentos</strong> atua em Juiz de Fora–MG com uma equipe de profissionais altamente qualificados, oferecendo soluções técnicas completas para obras residenciais, comerciais e industriais.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-8 font-sans">
              Nossa sede está localizada no coração de Juiz de Fora, na Galeria General Roberto Neves, onde recebemos clientes para consultas presenciais. Também atendemos de forma remota para projetos em toda a região.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="border border-[#c9a84c40] text-[#c9a84c] text-xs px-4 py-2 rounded-full font-sans">CREA Registrado</span>
              <span className="border border-[#c9a84c40] text-[#c9a84c] text-xs px-4 py-2 rounded-full font-sans">ART Garantida</span>
              <span className="border border-[#c9a84c40] text-[#c9a84c] text-xs px-4 py-2 rounded-full font-sans">Normas ABNT</span>
              <span className="border border-[#c9a84c40] text-[#c9a84c] text-xs px-4 py-2 rounded-full font-sans">Projetos Aprovados</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="card-dark rounded-2xl p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4 className="text-white font-bold text-base mb-2">{p.title}</h4>
                <p className="text-[#888888] text-sm leading-relaxed font-sans">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
