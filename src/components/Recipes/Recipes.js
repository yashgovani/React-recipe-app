import React from 'react';
import { recipeList } from '../../service/constant';
import Recipe from './Recipe/Recipe';

const Recipes = (props) => {
  const recipeSelectHandler = (id) => {
    props.history.push('/fullreceipe/' + id);
  };
  return (
    <div>
      {recipeList.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            name={recipe.recipeName}
            desc={recipe.description}
            path={recipe.imagePath}
            serve={recipe.serve}
            clicked={() => recipeSelectHandler(recipe.id)}
          />
        );
      })}
    </div>
  );
};

export default Recipes;
