import { notFound } from "next/navigation";
import Image from "next/image";
import { recipes } from "@/lib/recipes";

export async function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = recipes.find((r) => r.slug === params.slug);
  if (!recipe) return notFound();

  return (
    <section className="mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-semibold tracking-tight">{recipe.title}</h1>
      <p className="mt-2 text-white/80">{recipe.summary}</p>

      <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
        <Image
          src={recipe.cover}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Ingredientes</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-white/85">
            {recipe.ingredients.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Modo de preparo</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-white/85">
            {recipe.steps.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-6 text-sm text-white/70">
        <strong>Sobra utilizada:</strong> {recipe.leftoversFrom}
      </div>

      {recipe.tips?.length ? (
        <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
          <h3 className="font-semibold text-amber-200">Dicas</h3>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-amber-50/90">
            {recipe.tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
