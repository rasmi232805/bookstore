import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import booksData from '../data/books.json';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link> - {book.author} - ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
