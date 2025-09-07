"use client";

import { useState } from "react";

type Recipe = { id: string; title: string; leftover: string };

const INITIAL: Recipe[] = [
  { id: "r1", title: "Bolinho de Arroz Assado", leftover: "Arroz cozido" },
  { id: "r2", title: "Risoto de Frango", leftover: "Frango desfiado" },
  { id: "r3", title: "Escondidinho de Carne", leftover: "Carne de panela" },
];

export default function AdminPage() {
  const [recipeList, setRecipeList] = useState<Recipe[]>(INITIAL);

  function handleDelete(id: string) {
    if (confirm("Tem certeza que deseja excluir esta receita?")) {
      setRecipeList((prev) => prev.filter((r) => r.id !== id));
    }
  }

  return (
    <section className="mx-auto max-w-3xl py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Admin • Receitas</h1>
      <p className="mt-2 text-sm text-white/80">
        CRUD de demonstração local (somente client state).
      </p>

      <ul className="mt-6 space-y-3">
        {recipeList.map((r) => (
          <li
            key={r.id}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <div>
              <div className="font-medium">{r.title}</div>
              <div className="text-xs text-white/70">Sobra: {r.leftover}</div>
            </div>
            <button
              onClick={() => handleDelete(r.id)}
              className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium hover:bg-red-700"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
