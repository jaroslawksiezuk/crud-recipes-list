import React, { useState } from 'react';
import { IRecipe } from './Recipe';

interface IRecipeEditFormProps {
    currentRecipe: IRecipe;
    updateRecipe: (id: String, recipe: IRecipe) => void;
    close: () => void;
}

const EditRecipeForm = (props: IRecipeEditFormProps) => {

    const { currentRecipe, updateRecipe, close } = props;

    const [recipe, setRecipe] = useState<IRecipe>(currentRecipe);

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target
        setRecipe({ ...recipe, [name]: value })
    };

    return (
        <form onSubmit={() => updateRecipe(recipe.id, recipe)} className="recipeForm">
            <div className="recipeForm__header">
                Edit Recipe
            </div>
            <div className="recipeForm__content">
                <div>
                    <label>Recipe</label>
                    <input value={recipe.title} onChange={handleChange} name="title" placeholder="Recipe Name" />
                </div>
                <div>
                    <label>Ingredients</label>
                    <textarea value={recipe.ingredients} onChange={handleChange} name="ingredients" placeholder="Enter Ingredients,Separated,By Commas" />
                </div>
            </div>
            <div className="recipeForm__footer">
                <button type="submit" className="btn btn--primary">Edit Recipe</button>
                <button onClick={close} type="button" className="btn">Close</button>
            </div>
        </form>
    )
}

export default EditRecipeForm;
