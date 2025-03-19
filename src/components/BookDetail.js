import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../data/books.json';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const selectedBook = booksData.find(b => b.id === parseInt(id));
    setBook(selectedBook);
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <h3>by {book.author}</h3>
      <p>Price: ${book.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default BookDetail;
