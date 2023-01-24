import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Success.css'
import Map from '../components/Map';

const Success = () => {

  const { state } = useContext(AppContext)
  const { buyer } = state

  return (
    <div>
      <div className='Success'>
        <div className='Success-content'>
          <h2>{`${buyer.name}, gratis por tu compra`}</h2>
          <span>Tu pedido llegara en 3 dias a tu direccion:</span>
          <div className='Success-map'>
            <Map/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
