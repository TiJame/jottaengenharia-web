export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0f0f0f]">
        <div className="absolute inset-0" style={{background:"linear-gradient(135deg, #c9a84c12 0%, transparent 60%)"}} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl p-12" style={{border:"1px solid #c9a84c30", background:"#1a1a1a"}}>
          <div className="text-5xl mb-6">🏛️</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Seu projeto começa <span className="gradient-gold">aqui</span>
          </h2>
          <p className="text-[#888888] text-lg mb-8 max-w-xl mx-auto font-sans">
            Entre em contato agora mesmo. Atendimento ágil, orçamento sem compromisso e toda a orientação técnica que você precisa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5532998835397?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20projeto."
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-3 px-10 py-4 rounded-full text-lg font-bold text-white font-sans"
            >
              <WAIcon />
              Pedir Orçamento Gratuito
            </a>
            <a
              href="mailto:jandersonluisprojetos@hotmail.com"
              className="btn-outline-gold flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg font-semibold font-sans"
            >
              <MailIcon />
              Enviar E-mail
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#666666] font-sans">
            {["Atendimento rápido","Orçamento gratuito","ART incluída","Profissional habilitado"].map(t => (
              <span key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
