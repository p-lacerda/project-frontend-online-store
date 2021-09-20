import React from 'react';
import PropTypes from 'prop-types';

class SearchProduct extends React.Component {
  render() {
    const { stateSearch } = this.props;
    return (
      <ul>
        {stateSearch
          .map((product) => (
            <li
              data-testid="product"
              key={ product.id }
            >
              {product.title}
            </li>))}
      </ul>
    );
  }
}

SearchProduct.propTypes = {
  stateSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchProduct;
