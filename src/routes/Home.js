import { Component } from "../core/heropy";
import Headline from "../compoents/Headline";
import Search from "../compoents/Search";
import MovieList from "../compoents/MovieList";
import MovieListMore from "../compoents/MovieListMore";

export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const search = new Search().el
    const movieList = new MovieList().el
    const movieListMore = new MovieListMore().el

    this.el.classList.add('container')
    this.el.append(
      headline,
      search,
      movieList,
      movieListMore
    )
  }
}