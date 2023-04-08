import React from 'react';
import img1 from '../../assets/img/home-sec1-sek2.png';
import homeData from '../data/homeData';
import HomeItemPage from '../pages/HomeItemPage';
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import PauseOnHover from './PauseOnHover';
import HomeSec5 from './HomeSec5';
import homeSec5Data from '../data/homeSec5Data';



const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
        <div className="banner">
          <div className="banner-content">
            <h3>Welcome to the Accent Furniture</h3>
            <p>Design helps shape our everyday interactions through products,
              furniture, objects, or experiences.
            </p>
            <button>Shop Now</button>

          </div>
        </div> 

        <section>
         <PauseOnHover />
        </section>

        <section className="home">
          <div className="slides-container">
            <div className="slide active ">
              <div className="content">
                <span>{t("home.section1.text1")}</span>
                <h3>{t("home.section1.title")}</h3>
                <p>{t("home.section1.text")}</p>
              </div>
              <div className="image" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="blog darkClass">
            <div className="box-container">
              {homeSec5Data?.homeSec5Data.map((item,index)=>{
                  return(
                      < HomeSec5
                      img={item.img}
                      title={item.title}
                      text={item.text}
                      item={item}
                      key={index}
                      />
                  )
              })}
            </div>
        </section>

       <section className='sec-3'>
       <h1>Furniture <span>Categories</span></h1>
         <div className="container">
         {homeData?.homeData.map((item,index)=>{
                  return(
                      < HomeItemPage 
                      img={item.img}
                      title={item.title}
                      text={item.text}
                      item={item}
                      key={index}
                      />
                  )
              })}
              </div>
       </section>

    </div>
  )
}
export default HomePage