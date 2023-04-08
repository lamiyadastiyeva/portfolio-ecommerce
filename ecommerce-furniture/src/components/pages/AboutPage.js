import React from 'react';
import img1 from '../../assets/img/about-shekil1.jpg';
import AboutItemPage from './AboutItemPage';
import aboutData from '../data/aboutData';
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';


const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
        <section className="heading">
          <h3>{t("about.section1.title1")}</h3>
          <p><Link to="/">{t("about.section1.link1")}</Link> / <span>{t("about.section1.title2")}</span></p>
        </section>
        <section className="about darkClass">
          <div className="image" data-aos="flip-left">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <span>{t("about.section1.title4")}</span>
            <h3>{t("about.section1.title5")}</h3>
            <p>{t("about.section1.text1")}</p>
            <p>{t("about.section1.text2")}</p>
          </div>
        </section>
        <section className="services darkClass">
          <h1 className="title"> <span>{t("about.section2.title1")}</span> <a href="#">{t("about.section2.link1")}</a></h1>
          <div className="box-container">
          {aboutData?.aboutData.map((item,index)=>{
                  return(
                      < AboutItemPage
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
export default AboutPage