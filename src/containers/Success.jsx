import React from 'react';
import '../styles/Success.css'

const Success = () => {
  return (
    <div>
      <div className='Success'>
        <div className='Success-content'>
          <h2>Oscar, gratis por tu compra</h2>
          <span>Tu pedido llegara en 3 dias a tu direccion:</span>
          <div className='Success-map'>
            Google Maps
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
