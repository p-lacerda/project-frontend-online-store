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

  render() {
    return (
      <div>
        <section>
          <h3>Revise Seus Produto</h3>
          {/* <Produtos /> */}
          {' '}
          {/* Adicionar produtos que estao no carrinho */}
          <h4>total:</h4>
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
