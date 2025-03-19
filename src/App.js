import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';

function App() {
  const books = [
    { id: 1, title: 'Pride and Prejudice', image: 'https://m.media-amazon.com/images/I/712P0p5cXIL._SY466_.jpg', price: 500 },
    { id: 2, title: 'The Great Gatsby', image: 'https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg', price: 400 },
    { id: 3, title: 'The Lord of the Rings', image: 'https://m.media-amazon.com/images/I/71lKy8RoFUL._AC_UF1000,1000_QL80_.jpg', price: 1200 },
    { id: 4, title: 'The Hunger Games', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTWSmQr47NZ0ghAQgOl7ZQDkXcxAamrxMIA&s', price: 450 },
    { id: 5, title: 'It Ends with Us', image: 'https://m.media-amazon.com/images/I/91CqNElQaKL._AC_UF1000,1000_QL80_.jpg', price: 670 },
    { id: 6, title: 'The Fault in Our Stars', image: 'https://m.media-amazon.com/images/I/817tHNcyAgL.jpg', price: 1050 },
    { id: 7, title: 'Twisted Love', image: 'https://m.media-amazon.com/images/I/71YJet75sxL._AC_UF1000,1000_QL80_.jpg', price: 570 },
    { id: 8, title: 'The Diary of a Young Girl', image: 'https://m.media-amazon.com/images/I/81bLPNVfJTL._AC_UF1000,1000_QL80_.jpg', price: 670 },
    { id: 9, title: 'Lolita', image: 'https://rukminim3.flixcart.com/image/850/1000/kj0bp8w0-0/book/h/p/1/lolita-original-imafynkxketzyzfg.jpeg?q=90&crop=false', price: 780 },
  ];

  const [currentPage, setCurrentPage] = useState('Home');
  const [cart, setCart] = useState([]);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  const handleCheckout = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentSelection = (method) => {
    alert(`Payment Method Selected: ${method}`);
    setShowPaymentOptions(false);
    setCart([]);
  };

  const totalCartPrice = cart.reduce((total, book) => total + book.price, 0);

  const renderPage = () => {
    console.log('Current Page:', currentPage); // Debugging
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About Us':
        return <AboutUs />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };
  
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><button onClick={() => setCurrentPage('Home')}><h1><b>Home</b></h1></button></li>
          <li><button onClick={() => setCurrentPage('About Us')}><h1><b>About Us</b></h1></button></li>
          <li><button onClick={() => setCurrentPage('Contact')}><h1><b>Contact</b></h1></button></li>
        </ul>
      </nav>

      {/* Render Page Dynamically */}
      <div className="container">
        {renderPage()}
      </div>

      {/* Book List */}
      <header>Lost in Pages</header>
      <div className="container">
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>Price: ₹{book.price}</p>
              <button onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="cart">
          <h3>Shopping Cart</h3>
          <ul>
            {cart.map((book) => (
              <li key={book.id}>
                {book.title} - ₹{book.price} <button onClick={() => removeFromCart(book.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h4>Total Price: ₹{totalCartPrice}</h4>
          <div className="checkout">
            <button disabled={cart.length === 0} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>

        {/* Payment Options */}
        {showPaymentOptions && (
          <div className="payment-options">
            <h3>Select Payment Method:</h3>
            <button onClick={() => handlePaymentSelection('Credit Card')}>Credit Card</button>
            <button onClick={() => handlePaymentSelection('Debit Card')}>Debit Card</button>
            <button onClick={() => handlePaymentSelection('UPI')}>UPI</button>
            <button onClick={() => handlePaymentSelection('Cash on Delivery')}>Cash on Delivery</button>
          </div>
        )}
      </div>

      <footer>"Escape into words."</footer>
    </div>
  );
}

export default App;


































































































































