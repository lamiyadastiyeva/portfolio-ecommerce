import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();


    return (
      <div>
        <section className="footer darkClass">

            <div className="box-container">
              <div className="box1">
                <h3>{t("f.1.1")}</h3>
                <Link to='/'><i className="fas fa-arrow-right" /> {t("f.1.2")}</Link>
                <Link to="/shop"><i className="fas fa-arrow-right" /> {t("f.1.3")}</Link>
                <Link to="/about"><i className="fas fa-arrow-right" /> {t("f.1.4")}</Link>
                <Link to="/team"><i className="fas fa-arrow-right" /> {t("f.1.5")}</Link>
                <Link to="/blog"><i className="fas fa-arrow-right" /> {t("f.1.6")}</Link>
                <Link to="/contact"><i className="fas fa-arrow-right" /> {t("f.1.7")}</Link>
              </div>
              <div className="box1">
                <h3>{t("f.2.1")}</h3>
                <a href="#"><i className="fas fa-arrow-right" /> {t("f.2.2")}</a>
                <a href="#"><i className="fas fa-arrow-right" /> {t("f.2.3")}</a>
                <a href="#"><i className="fas fa-arrow-right" /> {t("f.2.4")}</a>
                <a href="#"><i className="fas fa-arrow-right" /> {t("f.2.5")}</a>
                <a href="#"><i className="fas fa-arrow-right" /> {t("f.2.6")}</a>
              </div>
              <div className="box1">
                <h3>{t("f.3.1")}</h3>
                <a href="#"><i className="fab fa-facebook-f" /> {t("f.3.2")}</a>
                <a href="#"><i className="fab fa-twitter" /> {t("f.3.3")}</a>
                <a href="#"><i className="fab fa-instagram" /> {t("f.3.4")}</a>
                <a href="#"><i className="fab fa-linkedin" /> {t("f.3.5")}</a>
                <a href="#"><i className="fab fa-pinterest" /> {t("f.3.6")}</a>
              </div>
            </div>
            
          </section>
          <section className="credit">
            {t("f.e.1")}
          </section>
      </div>
    )
  }
export default Footer;