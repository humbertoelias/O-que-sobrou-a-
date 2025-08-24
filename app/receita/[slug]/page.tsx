'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Users, ChefHat, ArrowLeft, Star, Lightbulb, Utensils } from 'lucide-react';
import { recipes } from '@/lib/recipes';

interface RecipePageProps {
  params: {
    slug: string;
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = recipes.find(r => r.slug === params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-poppins font-bold text-xl text-gray-900">Sobras Brasileiras</h1>
                <p className="text-xs text-gray-600">Transforme sobras em delícias</p>
              </div>
            </Link>
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recipe Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-br from-orange-200 to-red-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl opacity-80">{recipe.emoji}</div>
            </div>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-medium">4.8</span>
                <span className="text-gray-500 text-sm">(127 avaliações)</span>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <h1 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
              {recipe.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {recipe.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{recipe.cookTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{recipe.servings} porções</span>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                {recipe.difficulty}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="font-poppins font-bold text-xl text-gray-900 mb-4 flex items-center">
                <Utensils className="w-5 h-5 text-orange-500 mr-2" />
                Sobras Utilizadas
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="font-poppins font-bold text-xl text-gray-900 mb-4">
                Ingredientes Complementares
              </h2>
              <ul className="space-y-2">
                {recipe.complementaryIngredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {recipe.nutrition && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="font-poppins font-bold text-xl text-gray-900 mb-4">
                  Informações Nutricionais
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="font-bold text-lg text-orange-600">{recipe.nutrition.calories}</div>
                    <div className="text-sm text-gray-600">Calorias</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="font-bold text-lg text-orange-600">{recipe.nutrition.protein}</div>
                    <div className="text-sm text-gray-600">Proteína</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="font-bold text-lg text-orange-600">{recipe.nutrition.carbs}</div>
                    <div className="text-sm text-gray-600">Carboidratos</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="font-bold text-lg text-orange-600">{recipe.nutrition.fat}</div>
                    <div className="text-sm text-gray-600">Gordura</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="font-poppins font-bold text-xl text-gray-900 mb-6">
                Modo de Preparo
              </h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="font-poppins font-bold text-xl text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                Dicas Especiais
              </h2>
              <ul className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ver Mais Receitas</span>
          </Link>
        </div>
      </div>
    </div>
  );
}