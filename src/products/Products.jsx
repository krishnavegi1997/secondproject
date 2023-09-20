import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import axios from 'axios'
function Products() {
  const [products,setProducts]=useState([])
  const [cartproducts,setCartProducts]=useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{setProducts(res.data)})
    .catch((err)=>{console.log(err)})
  },[])
  function addToCart(product){
    setCartProducts([...cartproducts,{...product,count:1}])
  }
  function isProductInCart(product){
      var x= cartproducts.find(function(cp){
        if(cp.title===product.title){
          return true
        }else{
          return false
        }
      })
     return(x)
  }
  function getProductCount(product){
    var x= cartproducts.find(function(cp){
      if(cp.title===product.title){
        return true
      }else{
        return false
      }
    })
   return x?x.count:0
}
  function inc(product){
  var temp=cartproducts.map((cp)=>{
     if(cp.title===product.title){
      cp.count=cp.count+1
     }
     return cp;
  })
  setCartProducts([...temp])
  }
  function dec(product){
    var temp=cartproducts.map((cp)=>{
      if(cp.title===product.title){
       cp.count=cp.count-1
      }
      return cp;
   })
   setCartProducts([...temp])
  }
  return (
    <div className=" border border-4 border-dark p-2 w-100 d-flex flex-wrap">
        <div className="w-50">
        {
          products.length>0 && products.map((product)=>{
             return(
              <li className='d-flex flex-wrap'>
                <div>
                <img src={product.image} alt="" width='100px' />
                </div>
                <div className='p-4'>
                        {product.title}
                <h1>$ {product.price}</h1>
                {
                  isProductInCart(product)&&(
                    <>
                    <button onClick={()=>{inc(product)}}>+</button>&nbsp;&nbsp;
                    <b>{getProductCount(product)}</b>
                    <button onClick={()=>{dec(product)}}>-</button>
                    </>
                    
                  )
                }
                {
                  !isProductInCart(product)&&(
                    <button onClick={()=>{addToCart(product)}}>Add to Cart</button>
                  )
                }
                  
                 
                </div>
                
              </li>
             )
          })
        }
        </div>      
        <div className="w-50">
        <Cart cart={cartproducts}/>
        </div>
       
    </div>
  )
}

export default Products