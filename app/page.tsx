"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRight as ArrowRt,
  CheckCircle2,
  Leaf,
  Sparkles,
  Star,
} from "lucide-react";
import { recipes } from "@/lib/recipes";

function useHorizontalScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.9) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };
  return { ref, scrollBy };
}

export default function Page() {
  const carousel = useHorizontalScroll();

  const heroImg =
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=1";

  // 4 receitas para o carrossel
  const destaques = recipes.slice(0, 4);

  // vitrine com 6 receitas
  const vitrine = recipes;

  return (
    <div className="pb-28">
      {/* HERO */}
      <section className="relative mt-10 grid items-center gap-8 md:mt-16 md:grid-cols-2">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(600px 300px at 10% 0%, rgba(245,158,11,0.18), transparent 60%), radial-gradient(800px 450px at 110% 10%, rgba(6,182,212,0.12), transparent 60%)",
          }}
        />
        <div>
          <span className="badge">
            <Leaf className="h-3.5 w-3.5" />
            Cozinha sustentável
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Transforme <span className="text-amber-300">sobras</span> em{" "}
            <span className="bg-gradient-to-r from-amber-300 to-cyan-300 bg-clip-text text-transparent">
              pratos desejados
            </span>
            .
          </h1>
          <p className="mt-4 max-w-xl text-white/80 sm:text-lg">
            Visual impecável, preparo rápido e sabor surpreendente. Um site que vende a sua
            ideia antes mesmo do primeiro garfo.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#receitas" className="btn-primary group">
              Ver receitas em destaque
              <ArrowRt className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#cases" className="btn-ghost">Ver vitrine</a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80 sm:max-w-md">
            <li className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-300" /> Layout premium
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-300" /> Performance
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-300" /> Imagens otimizadas
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-300" /> Acessível e responsivo
            </li>
          </ul>
        </div>
        <div className="relative order-first aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl md:order-none">
          <Image
            src={heroImg}
            alt="Prato lindo com reaproveitamento"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1 text-xs ring-1 ring-white/15 backdrop-blur">
            foto ilustrativa
          </div>
        </div>
      </section>

      {/* CARROSSEL — agora NÃO CORTA (object-contain) */}
      <section id="receitas" className="container-x mt-14">
        <div className="mb-2 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Receitas em destaque
          </h2>
          <span className="text-sm text-white/70">Role ou use as setas</span>
        </div>

        <div className="relative">
          <button
            aria-label="anterior"
            onClick={() => carousel.scrollBy("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 ring-1 ring-white/15 backdrop-blur transition hover:bg-black/60"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="próximo"
            onClick={() => carousel.scrollBy("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 ring-1 ring-white/15 backdrop-blur transition hover:bg-black/60"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div ref={carousel.ref} className="-mx-4 overflow-x-auto px-4 pb-2">
            <ul className="flex snap-x snap-mandatory gap-4">
              {destaques.map((item, i) => (
                <li key={item.slug} className="snap-start" style={{ minWidth: "85%", maxWidth: 680 }}>
                  <article className="card">
                    <a href={`/receita/${item.slug}`} className="group block">
                      {/* altura fixa + contain para não cortar */}
                      <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black sm:h-[420px]">
                        <Image
                          src={item.cover}
                          alt={item.title}
                          fill
                          sizes="(max-width: 680px) 100vw, 680px"
                          className="object-contain"   // <— NÃO CORTA
                          priority={i < 1}
                        />
                      </div>
                      <h3 className="mt-3 text-lg font-semibold group-hover:underline">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80">{item.summary}</p>
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="container-x mt-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Como funciona</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: <Sparkles className="h-5 w-5 text-amber-300" />,
              title: "Design que vende",
              desc: "Tipografia forte, hierarquia impecável, navegação limpa e CTA claro.",
            },
            {
              icon: <Star className="h-5 w-5 text-cyan-300" />,
              title: "Imagens impecáveis",
              desc: "Next/Image otimizado, lazy loading e placeholders para velocidade.",
            },
            {
              icon: <Leaf className="h-5 w-5 text-amber-300" />,
              title: "Sustentável e rápido",
              desc: "Tailwind, acessibilidade e performance na veia.",
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <div className="flex items-center gap-2 text-sm">
                {f.icon}
                <span className="opacity-80">Diferencial</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-white/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VITRINE — 6 receitas, cada uma linka para sua página */}
      <section id="cases" className="container-x mt-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Vitrine</h2>
        <p className="mt-1 text-sm text-white/80">Layout editorial com receitas de sobras.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vitrine.map((r, i) => (
            <article key={r.slug} className="card img-hover">
              <a href={`/receita/${r.slug}`} className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black">
                  <Image
                    src={r.cover}
                    alt={r.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold">{r.title}</h3>
                <p className="text-sm text-white/80">{r.summary}</p>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* BANNER FINAL permanece igual ao que já ajustamos */}
      <section id="contato" className="container-x mt-20">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,.6)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(700px 300px at 12% 0%, rgba(245,158,11,.12), transparent 60%), radial-gradient(700px 360px at 85% 20%, rgba(6,182,212,.10), transparent 55%), linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02))",
            }}
          />
          <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 md:grid-cols-12 md:items-center md:gap-8 md:p-10">
            <div className="md:col-span-4">
              <img src="/jy-lockup.png" alt="José Ygor — Criação de Sites" className="max-w-[360px] w-full h-auto" />
            </div>
            <div className="md:col-span-6 min-w-0">
              <p className="text-[15px] text-white/85 md:text-base">
                Design sob medida, identidade forte e código de alta performance.
                Seu site com cara de produto <span className="text-white">premium</span>.
              </p>
            </div>
            <div className="md:col-span-2">
              <a
                href="mailto:joseygor@exemplo.com"
                className="btn-primary w-full justify-center"
              >
                Quero meu site
              </a>
              <div className="mt-2 text-center text-xs text-white/60">
                Resposta rápida • briefing em 10 min
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
