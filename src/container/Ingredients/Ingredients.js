import React from 'react';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serve: this.props.serve,
      ingredients: this.props.ings,
    };
  }

  inputChangeHandler = (e) => {
    this.setState({ serve: e.target.value });
  };

  render() {
    let transformIngredients = this.state.ingredients.map((ingredient) => {
      return (
        <li key={ingredient.name}>
          <span>{ingredient.name}</span> : &nbsp;
          {Number(this.state.serve / this.props.serve) *
            Number(ingredient.quantity)}
          {ingredient.parameter}
        </li>
      );
    });
    return (
      <div>
        {console.log(typeof this.state.ingredients)}
        {transformIngredients}
        <div className="ui right labeled input">
          <input
            type="text"
            value={this.state.serve}
            onChange={(e) => this.inputChangeHandler(e)}
          />
          <div className="ui basic label">serve</div>
        </div>
      </div>
    );
  }
}

export default Ingredients;
