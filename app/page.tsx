'use client';

import { useState } from 'react';
import { Search, Clock, Users, ChefHat, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { recipes } from '@/lib/recipes';

const ingredientChips = [
  { name: 'Arroz', emoji: '🍚', color: 'bg-amber-100 text-amber-800 hover:bg-amber-200' },
  { name: 'Feijão', emoji: '🫘', color: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
  { name: 'Frango', emoji: '🍗', color: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' },
  { name: 'Carne', emoji: '🥩', color: 'bg-red-100 text-red-800 hover:bg-red-200' },
  { name: 'Legumes', emoji: '🥕', color: 'bg-green-100 text-green-800 hover:bg-green-200' },
  { name: 'Pão', emoji: '🍞', color: 'bg-amber-100 text-amber-800 hover:bg-amber-200' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIngredients = selectedIngredients.length === 0 || 
                              selectedIngredients.some(selected => 
                                recipe.ingredients.some(ing => ing.toLowerCase().includes(selected.toLowerCase()))
                              );
    
    return matchesSearch && matchesIngredients;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-poppins font-bold text-xl text-gray-900">Sobras Brasileiras</h1>
                <p className="text-xs text-gray-600">Transforme sobras em delícias</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Início
              </Link>
              <Link href="/admin" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-6">
            O que sobrou aí?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Transforme suas sobras em pratos deliciosos com receitas autenticamente brasileiras. 
            Sustentabilidade nunca foi tão saborosa!
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Busque por ingredientes ou receitas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-orange-200 rounded-2xl focus:border-orange-400 focus:outline-none bg-white/80 backdrop-blur-sm"
            />
          </div>

          {/* Ingredient Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {ingredientChips.map((chip) => (
              <button
                key={chip.name}
                onClick={() => toggleIngredient(chip.name)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedIngredients.includes(chip.name)
                    ? 'bg-orange-500 text-white shadow-lg'
                    : chip.color
                }`}
              >
                <span className="mr-2">{chip.emoji}</span>
                {chip.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
              Receitas em Destaque
            </h3>
            <p className="text-gray-600 text-lg">
              Descubra como transformar sobras em pratos incríveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/receita/${recipe.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-br from-orange-200 to-red-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-80">{recipe.emoji}</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-poppins font-semibold text-xl text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {recipe.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {recipe.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.cookTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings} porções</span>
                      </div>
                      <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {recipe.difficulty}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {recipe.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl">Sobras Brasileiras</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando sobras em delícias desde 2024
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                Contato
              </Link>
              <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}