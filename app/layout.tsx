import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Fabi Saúde | Estética Avançada e Harmonização",
  description: "Clínica de Estética de Alto Padrão. Tratamentos faciais e corporais com tecnologia de ponta, segurança e resultados naturais. Agende sua avaliação.",
  openGraph: {
    title: "Clínica Fabi Saúde | Estética Avançada",
    description: "Recupere a firmeza da sua pele e realce sua autoestima. Agende sua avaliação agora.",
    url: "https://www.esteticafabisaude.com.br",
    siteName: "Clínica Fabi Saúde",
    images: [
      {
        url: "/clinic_tech.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Fabi Saúde - Estética Avançada",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Fabi Saúde | Estética Avançada",
    description: "Tratamentos faciais e corporais com tecnologia de ponta.",
    images: ["/clinic_tech.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorantGaramond.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
