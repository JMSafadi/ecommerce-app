import React from 'react';
import initialState from '../initialState'
import Products from '../components/Products'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Productos - Jumasa</title>
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
}

export default Home;
