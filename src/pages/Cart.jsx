import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import LeftArrow from '../services/image/LeftArrow.svg';
import BoxOpen from '../services/image/package-box-open.svg';

class Cart extends React.Component {
  render() {
    return (
      <section>
        <Link to="/" data-testid="shopping-cart-button">
          <img src={ LeftArrow } alt="arrow" />
        </Link>
        <img src={ BoxOpen } alt="Box Open Empty" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>

      </section>
    );
  }
}
export default Cart;
