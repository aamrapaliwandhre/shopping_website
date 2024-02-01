import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

//here in this components we will pass props to get the products
const Breadcrum = (props) => {
    //we got the product using props
    const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum