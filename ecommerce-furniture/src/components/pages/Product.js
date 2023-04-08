import React from 'react';
import ProductItem from './ProductItem';
import shopProductData from '../data/shopProductData';
import { useTranslation } from "react-i18next";


const Product = () => {
  const { t } = useTranslation();

  return (
      <div>
      <h1 className="text-center pb-5">{t("shop.section2.title1")}</h1>
          <div className="box-container row">
              {shopProductData?.productData.map((item,index)=>{
                  return(
                      < ProductItem 
                      img={item.img}
                      title={item.title}
                      price={item.price}
                      item={item}
                      key={index}
                      />
                  )
              })}
          </div>
          </div>
  )
}
export default Product