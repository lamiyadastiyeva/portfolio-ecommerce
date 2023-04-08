import React from 'react';
import { useTranslation } from "react-i18next";

const BlogItemPage = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="box">
        <div className="image">
          <img className='img' src={props.img} alt="" />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <div className="icons">
            <a href="#"><i className="fas fa-calendar" /> {t("blog.link3")}</a>
            <a href="#"><i className="fas fa-user" /> {t("blog.link4")} </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogItemPage