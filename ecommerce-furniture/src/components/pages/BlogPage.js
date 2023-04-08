import React from 'react';
import blogData from '../data/blogData';
import BlogItemPage from './BlogItemPage';
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';


const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
        <section className="heading">
          <h3>{t("blog.title1")}</h3>
          <p><Link to="/">{t("blog.link1")}</Link> / <span>{t("blog.title2")}</span></p>
        </section>
        <section className="blog darkClass">
          <h1 className="title"> <span>{t("blog.title3")}</span> <a href="#">{t("blog.link2")}</a></h1>
            <div className="box-container">
              {blogData?.blogData.map((item,index)=>{
                  return(
                      < BlogItemPage
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
export default BlogPage