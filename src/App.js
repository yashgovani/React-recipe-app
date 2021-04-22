import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Author from './container/Author/Author';
import FullRecipe from './container/FullRecipe/FullRecipe';
import Recipes from './container/Recipes/Recipes';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Recipe /> */}
        <Switch>
          <Route path="/recipes" component={Recipes} />
          <Route path="/fullrecipe/:id" component={FullRecipe} />
          <Route path="/author/:id" component={Author} />
          <Redirect from="/" to="/recipes" />
        </Switch>
      </div>
    );
  }
}

export default App;
