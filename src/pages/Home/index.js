import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

const image =
  'https://static.netshoes.com.br/produtos/tenis-puma-mapm-kart/44/D14-9603-244/D14-9603-244_detalhe2.jpg?ims=326x';
export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={image} alt="item" />

        <strong>Tênis muito legal</strong>
        <span>R$129,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CAMINHO</span>
        </button>
      </li>
      <li>
        <img src={image} alt="item" />

        <strong>Tênis muito legal</strong>
        <span>R$129,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CAMINHO</span>
        </button>
      </li>
      <li>
        <img src={image} alt="item" />

        <strong>Tênis muito legal</strong>
        <span>R$129,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CAMINHO</span>
        </button>
      </li>
      <li>
        <img src={image} alt="item" />

        <strong>Tênis muito legal</strong>
        <span>R$129,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CAMINHO</span>
        </button>
      </li>
      <li>
        <img src={image} alt="item" />

        <strong>Tênis muito legal</strong>
        <span>R$129,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CAMINHO</span>
        </button>
      </li>
      <li>
        <img src={image} alt="item" />

        <strong>Tênis muito legal</strong>
        <span>R$129,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CAMINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
