import React from 'react';
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';


const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
        <section className="heading">
          <h3>{t("contact.title1")}</h3>
          <p><Link to="/">{t("contact.link1")}</Link> / <span>{t("contact.title2")}</span></p>
        </section>
       <div className="contact darkClass">
          <form action>
            <h3>{t("contact.title4")}</h3>
            <span>{t("contact.text1")}</span>
            <input type="text" className="box" />
            <span>{t("contact.text2")}</span>
            <input type="number" className="box" />
            <span>{t("contact.text3")}</span>
            <input type="email" className="box" />
            <span>{t("contact.text4")}</span>
            <textarea className="box" name id cols={30} rows={10} defaultValue={""} />
          </form>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.476185507445!2d49.827133814761!3d40.37613766603227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4ec5fe0f83%3A0x805256f8d1c1ec75!2sMatrix%20Training%20Center!5e0!3m2!1saz!2s!4v1650537619850!5m2!1saz!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    </div>
  )
}
export default ContactPage