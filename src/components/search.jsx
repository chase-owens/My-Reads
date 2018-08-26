import React, { Component } from "react";
import Book from "./book";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    query: "",
    booksShowing: []
  };

  render() {
    const { query, booksShowing } = this.state;
    return (
      <div className="search-books container">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={event => this.performQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksShowing.map(
              (book, i) =>
                book.imageLinks ? (
                  <li key={i}>
                    <Book
                      newShelf={this.props.moveShelf}
                      title={book.title}
                      authors={book.authors}
                      img={book.imageLinks.thumbnail}
                      book={book}
                      shelf={book.shelf}
                    />
                  </li>
                ) : (
                  <li key={i}>
                    <Book
                      newShelf={this.props.moveShelf}
                      title={book.title}
                      authors={book.authors}
                      img={""}
                      book={book}
                      shelf={book.shelf}
                    />
                  </li>
                )
            )}
          </ol>
        </div>
      </div>
    );
  }

  // Was assisted in building the query with this webinar: https://www.youtube.com/watch?v=PF8fCAKR0-I&feature=youtu.be
  // Performs query, then checks to see if any of searched for books contain books on shelves
  // If it contains books on the shelf, if returns the shelved books to have option.value set accordingly
  performQuery = query => {
    let booksShowing = [];
    this.setState({ query });
    if (query) {
      BooksAPI.search(query).then(booksMatching => {
        if (booksMatching.length > 0) {
          booksShowing = booksMatching.map(b => {
            const index = this.props.books.findIndex(c => c.id === b.id);
            if (index >= 0) {
              return this.props.books[index];
            } else {
              return b;
            }
          });
        }
        this.setState({ booksShowing });
      });
    } else {
      this.setState({ booksShowing });
    }
  };
}

export default Search;
