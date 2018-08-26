import React from "react";
import Book from "./book";

const Read = ({ shelf, moveBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title container-fluid">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf.filter(library => library.shelf === "read").map(
            (book, i) =>
              book.imageLinks ? (
                <li key={i}>
                  <Book
                    title={book.title}
                    authors={book.authors}
                    img={book.imageLinks.thumbnail}
                    book={book}
                    shelf={book.shelf}
                    newShelf={moveBook}
                  />
                </li>
              ) : (
                <Book
                  title={book.title}
                  authors={book.authors}
                  img={""}
                  book={book}
                  shelf={book.shelf}
                  newShelf={moveBook}
                />
              )
          )}
        </ol>
      </div>
    </div>
  );
};

export default Read;
