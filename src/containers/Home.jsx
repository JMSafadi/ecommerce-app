import React from 'react';
import initialState from '../initialState'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <Products products={initialState.products} />
    </div>
  );
}

export default Home;
