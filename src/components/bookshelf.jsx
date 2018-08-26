import React from "react";
import CurrentlyReading from "./currentlyReading";
import WantToRead from "./wantToRead";
import Read from "./read";
import { Link } from "react-router-dom";

const Bookshelf = ({ moveShelf, books }) => {
  return (
    <main className="container">
      <div className="list-books">
        <h1 className="list-books-title">Your Digital Bookshelf</h1>
        <div className="list-books-container">
          <CurrentlyReading shelf={books} moveBook={moveShelf} />
          <WantToRead shelf={books} moveBook={moveShelf} />
          <Read shelf={books} moveBook={moveShelf} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </main>
  );
};

export default Bookshelf;
