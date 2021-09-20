import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ShoppingCart from '../services/image/ShoppingCart.svg';

class Home extends React.Component {
  render() {
    return (
      <section>
        <ul>
          <Categories />
        </ul>
        <input
          name="input"
          id="input"
          type="text"
        />
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ ShoppingCart } alt="shopping cart" />
        </Link>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </section>
    );
  }
}

export default Home;
