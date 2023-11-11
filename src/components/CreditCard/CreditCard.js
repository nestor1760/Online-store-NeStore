import React from 'react';
import './CreditCard.css';

const CreditCard = ({cardNumber, fullName, month, year, safetyCode, focus}) => {
  return (
    <>
    {
      (focus)
        ?
          <div className='creditCard-back'>
            <div className='bgLine'>
            </div>
            <div className='safetyCode'>
              {safetyCode}
            </div>
          </div>
        :
          <div className='creditCard-front'>
              <div className='cardHeader'>
                YourBank
              </div>
              <div className='chip'>
                <div className='chip2'></div>
              </div>
              <div className='cardNumber'>
                {cardNumber}
              </div>
              <div className='cardInfo'>
                <div className='cardFullName'>
                  {fullName}
                </div>
                <div className='cardDate'>
                  {(month.length > 0 || year.length > 0)
                    ?
                      <div>{month} / {year}</div>
                    :
                      <div></div>
                  }
                </div>
              </div>
          </div>
      }
    </> 
  )
}

export default CreditCard;
