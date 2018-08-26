import React, { Component } from "react";
import "./App.css";
import Bookshelf from "./components/bookshelf";
import Search from "./components/search";
import { Route } from "react-router-dom";
import * as BooksAPI from "./components/BooksAPI";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => (
            <Bookshelf books={this.state.books} moveShelf={this.moveShelf} />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search books={this.state.books} moveShelf={this.moveShelf} />
          )}
        />
      </React.Fragment>
    );
  }

  moveShelf = (book, shelf) => {
    console.log(book, shelf);
    BooksAPI.update(book, shelf).then(response => {
      console.log(response);
      BooksAPI.getAll().then(books => {
        console.log(books);
        this.setState({ books });
      });
    });
  };
}

export default App;
