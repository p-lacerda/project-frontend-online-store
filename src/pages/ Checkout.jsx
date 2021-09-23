import React from 'react';
import FormCheckout from '../components/inputs/FormCheckout';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      cep: '',
      endereco: '',
      complemento: '',
      numero: '',
      cidade: '',
      estado: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  getShoppingCart = () => {
    const storage = JSON.parse(localStorage.getItem('carrinho'));
    const amount = storage.map(({ price }) => price);
    const totalPrice = amount.reduce((sum, price) => sum + price);
    return (
      <div>
        {storage.map((product) => (
          <div key={ product.id }>
            <img src={ product.thumbnail } alt={ product.id } />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
          </div>
        ))}
        <h4>
          Total:
          { totalPrice.toFixed(2) }
        </h4>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getShoppingCart()}
        <section>
          <h3>Revise Seus Produto</h3>
          {/* <Produtos /> */}
          {' '}
          {/* Adicionar produtos que estao no carrinho */}
        </section>
        <section>
          <h3>Informações do Comprador</h3>
          <FormCheckout
            handleChange={ this.handleChange }
            value={ this.state }
          />
        </section>
        <h3>Método de Pagamento</h3>
        Boleto
        <label htmlFor="boleto">
          <input
            type="radio"
            name="pagamento"
            id="boleto"
          />
          Boleto
        </label>
        <section>
          Cartão de Crédito
          <label htmlFor="visa">
            <input
              type="radio"
              name="pagamento"
              id="visa"
            />
            Visa
          </label>
          <label htmlFor="mastercard">
            <input
              type="radio"
              name="pagamento"
              id="mastercard"
            />
            MasterCard
          </label>
          <label htmlFor="elo">
            <input
              type="radio"
              name="pagamento"
              id="elo"
            />
            Elo
          </label>
        </section>
        <button
          data-testid="checkout-products"
          type="submit"
        >
          Finalizar
        </button>
      </div>
    );
  }
}

export default Checkout;
