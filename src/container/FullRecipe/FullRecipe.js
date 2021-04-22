import React from 'react';
import { recipeList } from '../../service/constant';
import Ingredients from '../Ingredients/Ingredients';

class FullRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null,
      postId: '',
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      for (let key in recipeList) {
        if (Number(this.props.match.params.id) === recipeList[key].id) {
          this.setState({
            loadedPost: recipeList[key],
          });
        }
      }
    }
  }

  /*   componentDidUpdate() {
    if (
      !this.state.postId ||
      this.state.postId !== this.props.match.params.id
    ) {
      for (let key in recipeList) {
        if (this.props.match.params.id === recipeList[key].id) {
          this.setState({
            loadedPost: recipeList[recipeList[key].id],
            postId: this.props.match.params.id,
          });
        }
      }
    }
  } */

  backtrackHandler = () => {
    this.props.history.goBack();
  };

  authorSelectHandler = (id) => {
    this.props.history.push('/author/' + id);
  };

  render() {
    let post = <p>Loading...</p>;
    if (this.state.loadedPost) {
      const pic = require(`../../service/images/${this.state.loadedPost.imagePath}`)
        .default;
      post = (
        <div style={{ margin: 10 }}>
          <div className="ui two column grid">
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src={pic} alt="" />
                </div>
                <div className="content">
                  <div className="header">
                    {this.state.loadedPost.recipeName}
                  </div>
                  <div className="description">
                    {this.state.loadedPost.description}
                    <Ingredients
                      serve={this.state.loadedPost.serve}
                      ings={this.state.loadedPost.ingredients}
                    />
                  </div>

                  <button
                    style={{ margin: 10 }}
                    className="ui primary button"
                    onClick={() => window.print()}
                  >
                    Print
                  </button>
                </div>
                <div className="extra content">
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      this.authorSelectHandler(
                        this.state.loadedPost.author.map((uid) => uid.id)
                      )
                    }
                  >
                    <i className="user icon"></i>
                    {this.state.loadedPost.author.map(
                      (name) => name.authorName
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{post}</div>;
  }
}
export default FullRecipe;
