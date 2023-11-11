import React, { useState } from 'react';
import './PaymentCard.css'
import MyInput from '../../UI/MyInput/MyInput';
import CreditCard from '../CreditCard/CreditCard';
import { Link, useNavigate } from 'react-router-dom';

const PaymentCard = ({cart}) => {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [safetyCode, setSafetyCode] = useState('');
  const [isFocus, setIsFocus] = useState(false)
  
  const wrapCard = () => {
    setIsFocus(prev => !prev)
  }

  const inputFocus = () => {
    setIsFocus(true);
  };

  const inputBlur = () => {
    setIsFocus(false);
  };

  const clearCart = () => {
    cart.splice(0, cart.length);
  }

  return (
    <div className='containerPayment'>
       <div className='paymentCart'>
          <div className='paymentBody'>
            <h3 className='payBodyTitle'>Enter your data</h3>
            <form className="form">
              <MyInput 
                value={fullName} 
                setValue={setFullName} 
                type={'text'} 
                title={'Full name'} 
                placeholder={'full name...'}
              />
              <MyInput 
                value={number} 
                setValue={setNumber} 
                type={'text'} 
                title={'Card number'} 
                placeholder={'card number...'}
              />
              <div className='blockInputDate'>
                <MyInput 
                  value={month} 
                  setValue={setMonth} 
                  type={'text'} 
                  title={'The validity period (month / year)'} 
                  placeholder={'month...'}
                />
                <MyInput 
                  value={year} 
                  setValue={setYear} 
                  type={'text'} 
                  placeholder={'year...'}
                />
              </div>
              <MyInput 
                value={safetyCode} 
                setValue={setSafetyCode} 
                onFocus={inputFocus}
                onBlur={inputBlur}
                type={'text'} 
                title={'Safety code'} 
                placeholder={'cvc...'}
              />
            </form>
          </div>
          <div className='creditCard'>
            <button onClick={() => navigate(-1)} className='backBtn'>Go back</button>
              <CreditCard
                fullName={fullName} 
                month={month}
                year={year}
                cardNumber={number}
                safetyCode={safetyCode}
                focus={isFocus}
              />
              {
                (safetyCode.length > 2)
                  ?
                  <div onClick={clearCart}>
                    <Link to='/ordercompleted' className='payBtn'>Pay online</Link>
                  </div>
                  :
                  <div></div>
              }
          </div>
        </div>
    </div>
  )
}

export default PaymentCard;
