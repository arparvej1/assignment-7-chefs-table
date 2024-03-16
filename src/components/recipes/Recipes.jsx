import { useState } from 'react';
import { useEffect } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';


const Recipes = ({wantToCookHandler}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipes_data.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, []);

  return (
    <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
      {
        recipes.map(recipe => <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          wantToCookHandler={wantToCookHandler}
        ></Recipe>)
      }
    </div>
  );
};

Recipes.propTypes = {
  wantToCookHandler: PropTypes.func,
};

export default Recipes;