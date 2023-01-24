import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className='Products-item'>
      <img src={product.image} alt={product.title} />
      <div className='Products-item-info'>
        <h2>{product.title}
          <span>
            {' '}
            <h4>${product.price}</h4>
          </span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type='button' onClick={handleAddToCart(product)}>Comprar</button>
    </div>
  );
}

export default Product;
