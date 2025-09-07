// components/LogoJY.tsx
import * as React from "react";

/**
 * Logo JY — igual ao da imagem:
 * - J sólido âmbar (#f59e0b) e Y sólido ciano (#06b6d4)
 * - Glow forte por trás (GaussianBlur)
 * - Sem placa/fundo. Wordmark opcional com brilho.
 */
type Props = {
  size?: number;        // altura do monograma (px)
  withText?: boolean;   // exibe "JOSE YGOR / CRIAÇÃO DE SITES"
  className?: string;
};

export default function LogoJY({ size = 72, withText = true, className = "" }: Props) {
  const id = React.useId();

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Monograma sem fundo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="JOSE YGOR — Criação de Sites"
        className="shrink-0"
      >
        <defs>
          {/* Glows independentes com blur */}
          <filter id={`glow-amber-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" /><feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`glow-cyan-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" /><feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ---- J sólido (construído como “barra grossa arredondada”) ---- */}
        {/* Glow do J */}
        <path
          d="M24 10 v30 a14 14 0 0 0 14 14 h10"
          fill="none"
          stroke="#f59e0b"
          strokeOpacity="0.6"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#glow-amber-${id})`}
        />
        {/* J visível (sem borda — parece preenchido) */}
        <path
          d="M24 10 v30 a14 14 0 0 0 14 14 h10"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ---- Y sólido ---- */}
        {/* Glow do Y */}
        <path
          d="M40 10 l-12 14 M40 10 l12 14 M40 24 v30"
          fill="none"
          stroke="#06b6d4"
          strokeOpacity="0.6"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#glow-cyan-${id})`}
        />
        {/* Y visível */}
        <path
          d="M40 10 l-12 14 M40 10 l12 14 M40 24 v30"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark com brilho suave (igual ao da arte) */}
      {withText && (
        <div className="leading-tight">
          <div
            className="font-extrabold tracking-tight text-neutral-900 dark:text-white"
            style={{
              fontSize: 22,
              lineHeight: "1.05",
              textShadow:
                "0 0 12px rgba(255,255,255,.55), 0 0 28px rgba(255,255,255,.35)",
            }}
          >
            JOSE YGOR
          </div>
          <div
            className="uppercase text-neutral-800 dark:text-neutral-300"
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textShadow:
                "0 0 10px rgba(255,255,255,.45), 0 0 22px rgba(255,255,255,.25)",
            }}
          >
            CRIAÇÃO DE SITES
          </div>
        </div>
      )}
    </div>
  );
}
