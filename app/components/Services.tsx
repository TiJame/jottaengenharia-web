const WA_BASE = "https://wa.me/5532998835397?text=";

const services = [
  {
    icon: "📐",
    title: "Projetos",
    description: "Elaboramos projetos completos com rigor técnico e criatividade para atender todas as necessidades da sua obra.",
    items: ["Arquitetônico", "Estrutural", "Elétrico", "Hidráulico", "Contra Incêndio", "SPDA / Aterramento", "Aprovação em órgãos"],
    msg: "Olá!%20Tenho%20interesse%20em%20elaboração%20de%20Projetos.%20Pode%20me%20passar%20mais%20informações%3F",
  },
  {
    icon: "🏗️",
    title: "Execução de Obras",
    description: "Gerenciamos e executamos obras residenciais, comerciais e industriais com equipe especializada e total controle de qualidade.",
    items: ["Obras residenciais", "Obras comerciais", "Reformas e ampliações", "Construção em alvenaria e estrutura metálica", "Acompanhamento e fiscalização"],
    msg: "Olá!%20Tenho%20interesse%20em%20Execução%20de%20Obras.%20Pode%20me%20passar%20mais%20informações%3F",
  },
  {
    icon: "📏",
    title: "Topografia",
    description: "Levantamentos topográficos de alta precisão para regularização, projetos e obras de qualquer porte.",
    items: ["Levantamento planialtimétrico", "Locação de obra", "Georeferenciamento", "Levantamento cadastral", "Divisas e confrontações"],
    msg: "Olá!%20Tenho%20interesse%20em%20Topografia.%20Pode%20me%20passar%20mais%20informações%3F",
  },
  {
    icon: "🔩",
    title: "Sondagens",
    description: "Investigações geotécnicas para determinar as características do solo e garantir a segurança das fundações do seu projeto.",
    items: ["Sondagem SPT (Standard Penetration Test)", "Sondagem a trado", "Relatório geotécnico completo", "Indicação de tipo de fundação"],
    msg: "Olá!%20Tenho%20interesse%20em%20Sondagens.%20Pode%20me%20passar%20mais%20informações%3F",
  },
  {
    icon: "📋",
    title: "Laudos Técnicos",
    description: "Elaboramos laudos técnicos com embasamento legal e científico, assinados por profissional habilitado com ART.",
    items: ["Laudo de vistoria", "Laudo de avaliação de imóvel", "Laudo de patologias construtivas", "Laudo para INSS / Judicial", "Perícias técnicas"],
    msg: "Olá!%20Tenho%20interesse%20em%20Laudos%20Técnicos.%20Pode%20me%20passar%20mais%20informações%3F",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative bg-[#0f0f0f]">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase font-sans">O que fazemos</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Nossos <span className="gradient-gold">Serviços</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto font-sans">
            Soluções completas de engenharia para todas as etapas do seu empreendimento, do projeto à entrega final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-dark rounded-2xl p-7 flex flex-col">
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-5 font-sans">{s.description}</p>

              <ul className="space-y-2 flex-1 mb-6">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#aaaaaa] font-sans">
                    <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`${WA_BASE}${s.msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold font-sans"
              >
                Solicitar Orçamento →
              </a>
            </div>
          ))}

          {/* Card CTA */}
          <div className="rounded-2xl p-7 flex flex-col items-center justify-center text-center" style={{background:"linear-gradient(135deg,#c9a84c15,#9a7a2e10)", border:"1px solid #c9a84c30"}}>
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-3">Não encontrou o que procura?</h3>
            <p className="text-[#888888] text-sm mb-6 font-sans">Entre em contato e descreva sua necessidade. Temos soluções para cada desafio de engenharia.</p>
            <a
              href="https://wa.me/5532998835397?text=Olá!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-sans"
            >
              <WAIcon /> Falar com Engenheiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
