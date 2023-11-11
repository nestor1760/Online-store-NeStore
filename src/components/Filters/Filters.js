import React from 'react'

const Filters = ({selectedCategory, categoryChange}) => {

  return (
    <>
      <div className='fs-4 text-start m-3 fw-bold'>Filter by category:</div>
      <select
        value={selectedCategory}
        onChange={(e) => categoryChange(e.target.value)} 
        className="form-select my-4" 
        aria-label="Default select example"
        style={{ width: '200px', marginLeft: '20px', border: '1px solid black'}}
      >
        <option disabled>Choose category...</option>        
        <option value="men's clothing">Men's clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="Choose category...">All products</option>
      </select>
    </>
  )
}

export default Filters;
