import React, { useState } from 'react';

interface IRecipe {
    id: string;
    title: string;
    ingredients: string;
}

interface IRecipeProps {
    recipe: IRecipe;
    editRecipe: (recipe: IRecipe) => void;
    updateRecipe: (id: String, recipe: IRecipe) => void;
    destroyRecipe: (id: String) => void;
}

const Recipe = (props: IRecipeProps) => {

    const { recipe, destroyRecipe, editRecipe } = props;

    const [collapsing, setCollapsing] = useState<Boolean>(false);

    const renderIngredients = () => {
        return recipe.ingredients.split(',').map((value, key) => {
            return value ? <li key={key}>{value}</li> : '';
        });
    };

    return (
        <div className="recipe">
            <div onClick={() => setCollapsing(!collapsing)} className="recipe__title">
                {recipe.title}
            </div>
            <div className={collapsing ? 'recipe__content' : 'hidden'}>
                <div className="ingredients">
                    <div className="ingredients__title">Ingredients</div>
                    <ul className="ingredients__list">
                        {renderIngredients()}
                    </ul>
                </div>
                <button onClick={() => destroyRecipe(recipe.id)} className="btn btn--danger">Delete</button>
                <button onClick={() => editRecipe(recipe)} className="btn">Edit</button>
            </div>
        </div>
    )
}

export default Recipe;
