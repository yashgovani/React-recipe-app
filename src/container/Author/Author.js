import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousels from '../../components/Carousel/Carousel';
import { authorList } from '../../service/constant';
import { recipeList } from '../../service/constant';

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedAuthor: null,
      postId: '',
      recipe: [],
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      for (let key in authorList) {
        if (Number(this.props.match.params.id) === authorList[key].id) {
          this.setState({
            loadedAuthor: authorList[key],
          });
        }
      }
    }
    let pst = [];
    for (let i in recipeList) {
      for (let j in recipeList[i].author) {
        if (Number(this.props.match.params.id) === recipeList[i].author[j].id) {
          console.log(recipeList[i].imagePath);
          pst.push(recipeList[i].imagePath);
        }
      }
    }
    console.log(pst);
    this.setState({ recipe: pst });
  }

  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  render() {
    let post = <p>Loading...</p>;
    if (this.state.loadedAuthor) {
      const pic = require(`../../service/images/${this.state.loadedAuthor.imgUrl}`)
        .default;
      post = (
        <div style={{ margin: 10 }}>
          <div className="ui centered card">
            <div className="image">
              <img src={pic} alt="" />
            </div>
            <div className="content">
              <div className="header">{this.state.loadedAuthor.authorName}</div>
              <div className="description">
                {this.state.loadedAuthor.description}
              </div>
            </div>
            <div className="extra content">
              <i className="user icon"></i>
              {this.state.loadedAuthor.followers} Followers
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.state.recipe && (
          <Carousel
            className="Corousel"
            responsive={this.responsive}
            infinite={true}
          >
            {this.state.recipe.map((path) => (
              <Carousels key={path} path={path} />
            ))}
          </Carousel>
        )}
        {post}
      </div>
    );
  }
}

export default Author;
