import { useState } from 'react';
import { useEffect } from 'react';
import Recipe from './Recipe';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/assets/recipes_data.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])
  console.log(recipes)

  return (
    <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
      {
        recipes.map(recipe => <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
        ></Recipe>)
      }
    </div>
  );
};

export default Recipes;