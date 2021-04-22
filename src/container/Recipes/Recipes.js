import React from 'react';
import { recipeList } from '../../service/constant';
import Recipe from '../../components/Recipe/Recipe';

class Recipes extends React.Component {
  recipeSelectHandler = (id) => {
    this.props.history.push('/fullrecipe/' + id);
  };
  render() {
    let post = null;
    post = recipeList.map((recipe) => (
      <Recipe
        key={recipe.id}
        name={recipe.recipeName}
        time={recipe.time}
        path={recipe.imagePath}
        serve={recipe.serve}
        author={recipe.author.map((name) => name.authorName)}
        clicked={() => this.recipeSelectHandler(recipe.id)}
      />
    ));
    return (
      <div style={{ margin: 10 }}>
        <div className="ui four column grid">{post}</div>
      </div>
    );
  }
}

export default Recipes;
