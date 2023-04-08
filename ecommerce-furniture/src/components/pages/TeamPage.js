import React from 'react';
import TeamItemPage from './TeamItemPage';
import teamData from '../data/teamData';
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';


const TeamPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
        <section className="heading">
          <h3>{t("team.title1")}</h3>
          <p><Link to="/">{t("team.link1")}</Link> / <span>{t("team.title2")}</span></p>
        </section>
        <section className="team darkClass">
          <h1 className="title"> <span>{t("team.title3")}</span> <a href="#">{t("team.link2")}</a></h1>
             <div className="container">
                 {teamData?.teamData.map((item,index)=>{
                  return(
                      < TeamItemPage
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
export default TeamPage