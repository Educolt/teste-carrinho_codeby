import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

// json data
import itensLowerThanTen from './data/abaixo-10-reais.json';
import itensHigherThanTen from './data/acima-10-reais.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/itens/lowerThanTen', () => {
      return itensLowerThanTen;
    });
    this.get('/itens/higherThanTen', () => {
      return itensHigherThanTen;
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);