import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jotta Engenharia | Projetos e Empreendimentos – Juiz de Fora MG",
  description: "Jotta Engenharia Projetos e Empreendimentos em Juiz de Fora-MG. Projetos arquitetônicos, estruturais, elétricos, hidráulicos, execução de obras, topografia, sondagens e laudos técnicos.",
  keywords: "engenharia juiz de fora, projetos arquitetônicos, projetos estruturais, execução de obras, topografia, sondagem, laudo técnico, engenheiro juiz de fora",
  authors: [{ name: "Jotta Engenharia" }],
  openGraph: {
    title: "Jotta Engenharia | Projetos e Empreendimentos",
    description: "Projetos arquitetônicos, estruturais, elétricos, hidráulicos, execução de obras, topografia, sondagens e laudos em Juiz de Fora-MG.",
    type: "website",
    locale: "pt_BR",
    siteName: "Jotta Engenharia",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
