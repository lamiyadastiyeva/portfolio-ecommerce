import React from 'react';
import shopData from '../data/shopData';
import ShopItemPage from '../pages/ShopItemPage';
import Product from './Product';
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';


const ShopPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
        <section className="heading">
          <h3>{t("shop.section1.title1")}</h3>
          <p><Link to="/">{t("shop.section1.link1")}</Link> / <span>{t("shop.section1.title2")}</span></p>
        </section>
        <section className="category darkClass">
          <h1 className="title"> <span>{t("shop.section1.title3")}</span> <a href="#">{t("shop.section1.link2")}</a></h1>
          <div className="box-container">
          {shopData?.shopData.map((item,index)=>{
                  return(
                      < ShopItemPage
                      img={item.img}
                      title={item.title}
                      item={item}
                      key={index}
                      />
                     )
                 })}
          </div>
        </section> 
        <section className='darkClass'>
          < Product />
        </section> 
    </div>
  )
}
export default ShopPage