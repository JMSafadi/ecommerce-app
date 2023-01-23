import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext'
import '../styles/Payment.css'

const Payment = () => {

  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state

  const navigate = useNavigate()

  const paypalOption = {
    clientId: 'AVVvUEqZIywmDZXtbeFUm4PN8KLl7GnLVuE1SEU42UhW_gK43rwIDSRrhaCMkUpNDrPc84mvp59_QLYa',
    intent: 'caputre',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    if(data.status === 'Complete') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum  = cart.reduce(reducer, 0)
    return sum
  }

  return (
      <div className='Payment'>
        <div className='Payment-content'>
          <h3>Resumen del pedido:</h3>
          {cart.map((item) => (
            <div className='Payment-item' key={item.title}>
              <div className='Payment-element'>
                <h4>{item.title}</h4>
                <span>
                  $
                  {' '}
                  {item.price}
                </span>
              </div>
            </div>
          ))}
          <div className='Payment-button'>
            <PayPalButton 
              paypalOptions={paypalOption}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onPaymentStart={() => console.log('start payment')}
              onPaymentSuccess={data => handlePaymentSuccess(data)}
              onPaymentError={error => console.log(error)}
              onPaymentcancel={data => console.log(data)}
            />
          </div>
        </div>
        <div/>
      </div>
  );
}

export default Payment;
