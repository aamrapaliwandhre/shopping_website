import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../Componenets/Breadcrums/Breadcrum';
import ProductDisplay from '../Componenets/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Componenets/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Componenets/RelatedProducts/RelatedProducts';
import Sidebar from '../Componenets/SideBar/SideBar';

const Product = () => {
  const{all_product}=useContext(ShopContext)
  // using below product id we will find the data in all product data
  const{productId} = useParams();
  //we will assing it in one variable
  const product = all_product.find((e)=>e.id===Number(productId))
//now we will display above product in page
  return (
    <div>
        <Breadcrum product={product}/>
        {/* by giving following prop that is product we are giving data of product that is image and all other details */}
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Product