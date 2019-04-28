import React, { useState } from 'react';

interface IRecipe {
    id: string;
    title: string;
    ingredients: string;
}

interface IRecipeFormProps {
    createRecipe: (recipe: IRecipe) => void;
    close: () => void;
}

const AddRecipeForm = (props: IRecipeFormProps) => {

    const { createRecipe, close } = props;

    const [recipe, setRecipe] = useState<IRecipe>({
        id: '',
        title: '',
        ingredients: ''
    });

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target
        setRecipe({ ...recipe, [name]: value })
    };

    return (
        <form onSubmit={() => createRecipe(recipe)} className="recipeForm">
            <div className="recipeForm__header">
                Add Recipe
            </div>
            <div className="recipeForm__content">
                <div>
                    <label>Recipe</label>
                    <input value={recipe.title} onChange={handleChange} name="title" />
                </div>
                <div>
                    <label>Ingredients</label>
                    <textarea value={recipe.ingredients} onChange={handleChange} name="ingredients" />
                </div>
            </div>
            <div className="recipeForm__footer">
                <button type="submit" className="btn btn--primary">Add Recipe</button>
                <button onClick={close} type="button" className="btn">Close</button>
            </div>
        </form>
    )
}

export default AddRecipeForm;
