import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Details';
import PopcornFilterForm from './FilterForm';
import { CartProvider } from './CartContext';
import Cart from './Cart';

class App extends React.Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <h1>NPWA - Vježba 5</h1>
            <h2>Popcorn e-Store</h2>

            <Routes>
              <Route
                path="/:flavor/:subFlavor/:productName"
                element={<Details />}
              />
              <Route path="/" element={<PopcornFilterForm />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    );
  }
}

export default App;
