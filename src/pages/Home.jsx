import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <section>
        <input
          name="input"
          id="input"
          type="text"
        />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </section>
    );
  }
}

export default Home;
