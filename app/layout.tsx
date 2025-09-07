import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sobras Brasileiras — Sabor, Visual e Desempenho",
  description:
    "Receitas criativas para reaproveitar sobras com visual premium e performance.",
  keywords: ["receitas brasileiras", "sobras", "reaproveitamento", "culinária sustentável"],
  icons: {
    icon: "/favicon.ico",      // Ícone padrão da aba
    shortcut: "/favicon.ico",  // Atalho
    apple: "/favicon.ico"      // iOS
  },
  openGraph: {
    title: "Sobras Brasileiras",
    description:
      "Reaproveite sobras com receitas lindas, práticas e sustentáveis.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobras Brasileiras",
    description: "Receitas criativas para transformar sobras em delícias.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={[
          inter.variable,
          poppins.variable,
          "min-h-dvh bg-neutral-950 text-neutral-100 antialiased"
        ].join(" ")}
      >
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <div className="container-x flex h-14 items-center justify-between">
            <a href="/" className="inline-flex items-center gap-2">
              {/* Ícone do Brasil vindo do favicon */}
              <img
                src="/favicon.ico"
                alt="Brasil"
                width={20}
                height={20}
                className="opacity-80"
              />
              <span className="font-semibold tracking-tight">
                Sobras Brasileiras
              </span>
            </a>
            <nav className="hidden gap-6 text-sm sm:flex">
              <a className="opacity-80 hover:opacity-100" href="#receitas">Receitas</a>
              <a className="opacity-80 hover:opacity-100" href="#cases">Vitrine</a>
              <a className="opacity-80 hover:opacity-100" href="#contato">Contato</a>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-white/10 py-8 text-sm opacity-80">
          <div className="container-x flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Sobras Brasileiras.</span>
            <a
              href="mailto:joseygor@exemplo.com"
              className="inline-flex items-center gap-2 rounded-xl bg-lime-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-lime-700"
            >
              <img src="/jy-lockup.png" alt="José Ygor" className="h-5 w-auto" />
              José Ygor • Criação de sites
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
