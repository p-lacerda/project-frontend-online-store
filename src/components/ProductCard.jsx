import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { stateSearch } = this.props;
    return (
      <div>
        { stateSearch.map((product) => (
          <Link
            data-testid="product-detail-link"
            key={ product.id }
            to={ `/product/${product.id}+${product.category_id}` }
          >
            <div data-testid="product">
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.title}</p>
            </div>
          </Link>))}
      </div>
    );
  }
}
ProductCard.propTypes = {
  stateSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductCard;
