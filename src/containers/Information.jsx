import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Information.css'

const Information = () => {

  const { state, addToBuyer } = useContext(AppContext)
  const form = useRef(null)
  const navigate = useNavigate()

  const { cart } = state

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer)
    navigate('/checkout/payment')
  }

  return (
      <div className='Information'>
        <div className='Information-content'>
          <div className='Information-head'>
            <h2>Informacion de contacto</h2>
          </div>
          <div className='Information-form'>
            <form ref={form}>
              <input type='text' placeholder='Nombre completo' name='name'/>
              <input type='text' placeholder='Correo electronico' name='email'/>
              <input type='text' placeholder='Direccion' name='address'/>
              <input type='text' placeholder='Apartamento' name='apto'/>
              <input type='text' placeholder='Ciudad' name='city'/>
              <input type='text' placeholder='Pais' name='country'/>
              <input type='text' placeholder='Estado' name='state'/>
              <input type='text' placeholder='Codigo Postal' name='cp'/>
              <input type='text' placeholder='Telefono' name='phone'/>
            </form>
          </div>
          <div className='Information-button'>
            <div className='Information-back'>
            <Link to='/checkout'>
              <button style={{background: 'grey', color: 'black', border:'none', fontWeight:'normal'}}>Regresar</button>
            </Link>
            </div>
            <div className='Information-next'>
                <button type='button' onClick={handleSubmit}>Pagar</button>
            </div>
          </div>
        </div>
        <div className='Information-sidebar'>
          <h3>Pedido:</h3>
          {cart.map((item) => (
            <div className='Information-element'>
              <h4>{item.title}</h4>
              <img src={item.image} alt={item.title}/>
              <span>
                $
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Information;
