import React from 'react';
import { useCart } from 'react-use-cart';
import { useTranslation } from "react-i18next";
import Navbar from '../Navbar';
const Cart = () => {

  const { t } = useTranslation();

  const {isEmpty,
    totalUniqueItems, items,
    totalItems, updateItemQuantity,
    cartTotal, removeItem, emptyCart
  } = useCart();
  if(isEmpty) return (
  <div className='darkClass'>
    <Navbar/>
    <section>
      <h1 className="text text-center pt-5 pb-5">{t("cart.title")}</h1>
    </section>
  </div>
  )
  
  return (
    <div>

      <Navbar />
      <section className="darkClass">
        <h1 className='text text-center pt-5'>{t("cart.title1")}</h1>
        <div className='py-4 container darkClass'>
            <div className="row">
                <div className="col-12">
                    <h5>{t("cart.title2")} ({totalUniqueItems}) {t("cart.title3")} ({totalItems})</h5>
                </div>
            </div>
            <table class="table">
              <thead>
                 <tr>
                   <th scope="col">№</th>
                   <th scope="col">{t("cart.title4")}</th>
                   <th scope="col">{t("cart.title5")}</th>
                   <th scope="col">{t("cart.title6")}</th>
                   <th scope="col">{t("cart.title7")}</th>
                 </tr>
               </thead>
            <tbody>
            {items.map((item,index)=>{
               return(
                 <tr>
                 <th scope="row">{item.id}</th>
                 <td>
                   <img className='image' width='100' src={item.img} alt="" />
                 </td>
                 <td>{item.title}</td>
                 <td>{item.price}$</td>
                 <td>
                   <button className="minus-button" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                   <button className='number-button ms-2'>{item.quantity}</button>
                   <button className="plus-button ms-2" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                 </td>
                 <td>
                   <button className="remove-button" onClick={()=>removeItem(item.id)}><i className="fas fa-trash"/></button></td>
                 </tr>
               )
             })}
            <h3 className="text-center pt-4">
            {t("cart.title8")} {cartTotal}$
            </h3>
            <button className='general-remove-button' onClick={()=>emptyCart()}><i className="fas fa-trash"/></button>
            </tbody>
           </table>  
        </div>
        </section>
        
    </div>
  )
}
export default Cart