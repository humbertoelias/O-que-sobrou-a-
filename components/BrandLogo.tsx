import Image from "next/image";

type Props = {
  variant?: "mark" | "lockup"; // "mark" = só o JY; "lockup" = JY + texto
  width?: number;              // largura desejada em px
  className?: string;
  priority?: boolean;
  alt?: string;
};

/** Usa a ARTE EXATA (PNG) do logo, sem reinterpretação. */
export default function BrandLogo({
  variant = "mark",
  width = variant === "mark" ? 48 : 320,
  className = "",
  priority = false,
  alt = "José Ygor — Criação de Sites",
}: Props) {
  const src =
    variant === "mark" ? "/brand/jy-mark.png" : "/brand/jy-lockup.png";

  // Não usamos height fixo: deixamos o Next/Image calcular pela proporção.
  return (
    <div className={className} style={{ lineHeight: 0 }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={1} // placeholder; Next ajusta pela proporção do PNG
        sizes="(max-width: 768px) 50vw, 320px"
        priority={priority}
        style={{ height: "auto" }}
      />
    </div>
  );
}
