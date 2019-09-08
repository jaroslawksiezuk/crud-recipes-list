import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import Recipe, { IRecipe } from './components/Recipe';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import Storage from './utils/Storage';

const App = () => {

  const recipesData: IRecipe[] = Storage.get('recipes');
  const [recipes, setRecipes] = useState<IRecipe[]>(recipesData);
  const [editing, setEditing] = useState<Boolean>(false);
  const [creating, setCreating] = useState<Boolean>(false);
  const [currentRecipe, setCurrentRecipe] = useState<IRecipe>({
    id: "",
    title: "",
    ingredients: ""
  });

  useEffect(() => {
    Storage.set('recipes', recipes);
  }, [recipes]);

  const createRecipe = (recipe: IRecipe) => {
    setCreating(false);
    recipe.id = uuid();
    setRecipes([...recipes, recipe]);
  };

  const editRecipe = (recipe: IRecipe) => {
    setEditing(true);
    setCurrentRecipe({
      id: recipe.id,
      title: recipe.title,
      ingredients: recipe.ingredients
    });
  };

  const updateRecipe = (id: String, updatedRecipe: IRecipe) => {
    setEditing(false);
    setRecipes(recipes.map(recipe => (recipe.id === id ? updatedRecipe : recipe)));
  };

  const destroyRecipe = (id: String) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  };

  return (
    <div className="recipesList">
      <div className="recipesList__content">
        {recipes.map(value => {
          return <Recipe key={value.id} recipe={value} editRecipe={editRecipe} destroyRecipe={destroyRecipe} />
        })}
      </div>
      <button onClick={() => setCreating(true)} className="btn btn--primary btn--big">Add Recipe</button>
      {creating ? (
        <AddRecipeForm createRecipe={createRecipe} close={() => setCreating(false)} />
      ) : ''}
      {editing ? (
        <EditRecipeForm currentRecipe={currentRecipe} updateRecipe={updateRecipe} close={() => setEditing(false)} />
      ) : ''}
    </div>
  );
}

export default App;
