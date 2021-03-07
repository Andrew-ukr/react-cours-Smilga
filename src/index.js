import React from "react";
import ReactDOM from "react-dom";
import books from './books';
import Book from './Book';

import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}

      {/* {books.map((book) => (
        <Book key={book.id} book={book} />
      ))} */}
    </section>
  );
};

ReactDOM.render(<BookList />, document.querySelector("#root"));
