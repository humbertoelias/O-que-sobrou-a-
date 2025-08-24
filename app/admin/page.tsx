'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChefHat, Plus, Edit, Trash2, ArrowLeft, Save, X } from 'lucide-react';
import { recipes, Recipe } from '@/lib/recipes';

export default function AdminPage() {
  const [recipeList, setRecipeList] = useState<Recipe[]>(recipes);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Partial<Recipe> | null>(null);

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta receita?')) {
      setRecipeList(prev => prev.filter(r => r.id !== id));
    }
  };

  const handleSave = () => {
    if (editingRecipe) {
      if (editingRecipe.id) {
        // Update existing recipe
        setRecipeList(prev => prev.map(r => 
          r.id === editingRecipe.id ? editingRecipe as Recipe : r
        ));
      } else {
        // Add new recipe
        const newRecipe = {
          ...editingRecipe,
          id: Date.now().toString(),
          slug: editingRecipe.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || ''
        } as Recipe;
        setRecipeList(prev => [...prev, newRecipe]);
      }
    }
    setIsEditing(false);
    setEditingRecipe(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingRecipe(null);
  };

  const startNewRecipe = () => {
    setEditingRecipe({
      title: '',
      description: '',
      emoji: '🍽️',
      cookTime: '',
      servings: 4,
      difficulty: 'Fácil',
      ingredients: [''],
      complementaryIngredients: [''],
      instructions: [''],
      tips: [''],
      tags: ['']
    });
    setIsEditing(true);
  };

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
                <h1 className="font-poppins font-bold text-xl text-gray-900">Admin - Sobras Brasileiras</h1>
                <p className="text-xs text-gray-600">Gerenciar receitas</p>
              </div>
            </Link>
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Voltar ao Site</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isEditing ? (
          <>
            {/* Admin Dashboard */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-2">
                  Painel Administrativo
                </h2>
                <p className="text-gray-600">Gerencie as receitas do site</p>
              </div>
              <button
                onClick={startNewRecipe}
                className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Nova Receita</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  Total de Receitas
                </h3>
                <p className="text-3xl font-bold text-orange-500">{recipeList.length}</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  Receitas Fáceis
                </h3>
                <p className="text-3xl font-bold text-green-500">
                  {recipeList.filter(r => r.difficulty === 'Fácil').length}
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  Tempo Médio
                </h3>
                <p className="text-3xl font-bold text-blue-500">30 min</p>
              </div>
            </div>

            {/* Recipe List */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="font-poppins font-semibold text-xl text-gray-900">
                  Receitas Cadastradas
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recipeList.map((recipe) => (
                  <div key={recipe.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{recipe.emoji}</div>
                        <div>
                          <h4 className="font-poppins font-semibold text-lg text-gray-900">
                            {recipe.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{recipe.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span>{recipe.cookTime}</span>
                            <span>{recipe.servings} porções</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                              {recipe.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEdit(recipe)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(recipe.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Recipe Editor */
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-poppins font-bold text-2xl text-gray-900">
                {editingRecipe?.id ? 'Editar Receita' : 'Nova Receita'}
              </h2>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Cancelar</span>
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título da Receita
                  </label>
                  <input
                    type="text"
                    value={editingRecipe?.title || ''}
                    onChange={(e) => setEditingRecipe(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Ex: Arroz Carreteiro de Sobras"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição
                  </label>
                  <textarea
                    value={editingRecipe?.description || ''}
                    onChange={(e) => setEditingRecipe(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Descreva a receita..."
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emoji
                    </label>
                    <input
                      type="text"
                      value={editingRecipe?.emoji || ''}
                      onChange={(e) => setEditingRecipe(prev => ({ ...prev, emoji: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-center text-2xl"
                      placeholder="🍽️"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tempo
                    </label>
                    <input
                      type="text"
                      value={editingRecipe?.cookTime || ''}
                      onChange={(e) => setEditingRecipe(prev => ({ ...prev, cookTime: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="30 min"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Porções
                    </label>
                    <input
                      type="number"
                      value={editingRecipe?.servings || 4}
                      onChange={(e) => setEditingRecipe(prev => ({ ...prev, servings: parseInt(e.target.value) }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dificuldade
                  </label>
                  <select
                    value={editingRecipe?.difficulty || 'Fácil'}
                    onChange={(e) => setEditingRecipe(prev => ({ ...prev, difficulty: e.target.value as 'Fácil' | 'Média' | 'Difícil' }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="Fácil">Fácil</option>
                    <option value="Média">Média</option>
                    <option value="Difícil">Difícil</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sobras Utilizadas (uma por linha)
                  </label>
                  <textarea
                    value={editingRecipe?.ingredients?.join('\n') || ''}
                    onChange={(e) => setEditingRecipe(prev => ({ 
                      ...prev, 
                      ingredients: e.target.value.split('\n').filter(i => i.trim()) 
                    }))}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="2 xícaras de arroz cozido&#10;300g de carne assada picada"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ingredientes Complementares (uma por linha)
                  </label>
                  <textarea
                    value={editingRecipe?.complementaryIngredients?.join('\n') || ''}
                    onChange={(e) => setEditingRecipe(prev => ({ 
                      ...prev, 
                      complementaryIngredients: e.target.value.split('\n').filter(i => i.trim()) 
                    }))}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="2 colheres de sopa de óleo&#10;1 cebola média picada"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    value={editingRecipe?.tags?.join(', ') || ''}
                    onChange={(e) => setEditingRecipe(prev => ({ 
                      ...prev, 
                      tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) 
                    }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Gaúcho, Churrasco, Arroz"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Modo de Preparo (um passo por linha)
                </label>
                <textarea
                  value={editingRecipe?.instructions?.join('\n') || ''}
                  onChange={(e) => setEditingRecipe(prev => ({ 
                    ...prev, 
                    instructions: e.target.value.split('\n').filter(i => i.trim()) 
                  }))}
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Aqueça o óleo em uma panela grande...&#10;Adicione a cebola e refogue..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dicas Especiais (uma por linha)
                </label>
                <textarea
                  value={editingRecipe?.tips?.join('\n') || ''}
                  onChange={(e) => setEditingRecipe(prev => ({ 
                    ...prev, 
                    tips: e.target.value.split('\n').filter(i => i.trim()) 
                  }))}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Use carnes variadas do churrasco para mais sabor&#10;O arroz pode estar ressecado - o caldo vai hidratá-lo"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}