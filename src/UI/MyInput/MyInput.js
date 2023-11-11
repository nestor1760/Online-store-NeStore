import React from 'react';
import './MyInput.css'

const MyInput = ({value, setValue, type, title, placeholder, onFocus, onBlur}) => {
  return (
    <div className='myInput'>
      <p className='inputTitle'>{title}</p>
      <input 
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        required
        className="input" 
        type={type}
        placeholder={placeholder} 
      />
    </div>
  )
}

export default MyInput
