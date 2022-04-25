import './App.css';
import { useState } from 'react';
import img from '../src/image/mastercard-logo-5-1.png'

function App() {

  const [cardDetails, setCardDetails] = useState({
    nombre: 'Gabriel Suarez',
    cardNumber: '5555 1515 0000 3333',
    month: '10',
    year: '22'
  });

  const cambioTexto = e=>setCardDetails({...cardDetails, [e.target.name]: e.target.value});

  return (
    <div className="
      container-full 
      w-screen h-screen 
      flex 
      items-center 
      bg-gradient-to-br from-red-600 to-purple-500
      grid grid-cols-1 xs:grid-cols-2
    ">
      <div className='container h-screen flex items-center bg-black text-gray-300 px-4'>
        <div className='flex-col px-4'>
          <h1 className='text-2x1 font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>METODOS DE PAGAMENTO</h1>
          <small className='text-gray-400 text-center block'>Ingrese los detalles de la tarjeta de crédito</small>
          <hr className='opacity-20 mt-6 mb-8' />
          <input 
            type='text' 
            className='w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2' 
            placeholder='Titular de la Cuenta'
            name='nombre'
            onChange={cambioTexto}
          />
          <input 
            type='text' 
            className='w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2' 
            placeholder='Numero Tarjeta'
            name='cardNumber'
            onChange={cambioTexto}
          />
          <div className='flex'>
            <input 
              type='text' 
              className='py-2 w-1/2 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2' 
              placeholder='Mes'
              name='month'
              onChange={cambioTexto}
            />
            <input 
              type='text' 
              className='py-2 w-1/2 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2' 
              placeholder='Año'
              name='year'
              onChange={cambioTexto}
            />
          </div>
          <button className='btn-pay w-full mt-5 rounded-full px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500'>
            Pagar
          </button>
        </div>
      </div>
      <div className='container mr-auto flex items-center justify-center'>
        <div className='px-3 py-5 grid grid-cols grid-row-4 justify-center relative z-10 bg-gradient-to-br from-gray-300 to-transparent w-1/2 bg-opacity-20 h-80 rounded-md shadow-md card'>
          <img 
            src='https://pngimage.net/wp-content/uploads/2018/05/chip-credit-card-png-7.png' 
            className='w-8 h-8 mx-auto col-span-2'
          />
          <h1 className='col-span-2 text-2x1 font-semibold'>
            {cardDetails.nombre}
          </h1>          
          <p className='col-span-2 text-gray-800 font-medium'>
            {cardDetails.cardNumber}
          </p>
          <p>
            <span className='text-sm text-gray-700'>
              EXP DATE
            </span> {cardDetails.month}/{cardDetails.year}
          </p>
          <img 
            //src='https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-5-1.png' 
            src={img}
            className='w-10 h-8 ml-auto my-auto'
          />
        </div>
        <div className='rounded-full h-40 w-40 absolute top-1/4 right-12 z-0 bg-gradient-to-br from-white to-transparent'></div>
        <div className='rounded-full h-20 w-20 absolute bottom-1/3 right-1/3 z-0 bg-gradient-to-br from-white to-transparent'></div>
        <div className='rounded-full h-10 w-10 absolute bottom-1/4 right-1/4 z-0 bg-gradient-to-br from-white to-transparent'></div>
      </div>
    </div>
  );
}

export default App;
