import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.funcGetCategories();
  }

  funcGetCategories = async () => {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h3>Categorias:</h3>
        {categories
          .map(({ name, id }) => <li data-testid="category" key={ id }>{name}</li>)}
      </div>
    );
  }
}

export default Categories;
