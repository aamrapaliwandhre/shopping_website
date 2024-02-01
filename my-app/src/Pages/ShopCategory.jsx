import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Componenets/Assests/dropdown_icon.png'
// import Item from "../Componenets/Item/Item"
import Item from '../Componenets/Item/Item'
import all_product from '../Componenets/Assests/all_product'
import Sidebar from '../Componenets/SideBar/SideBar'
//import Product from './Product'
import Products from "../Componenets/Assests/all_product"


const ShopCategory = (props) => {
const {all_product} = useContext(ShopContext);











  return (
    <div>
      <Sidebar/>
      <div className='shop-category'>
        <img className='shopcatgory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span >out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item,i)=>{
              if (props.category===item.category){
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>

    </div>  
  )
}

export default ShopCategory