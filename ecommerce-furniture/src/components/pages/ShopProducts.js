import React, {useState} from "react";
import Navbar from '../Navbar';
import img2 from '../../assets/img/shop-shekil2.jpg';
//import img3 from '../../assets/img/shop-shekil3.jpg';
//import img4 from '../../assets/img/shop-shekil4.jpg';
//import img6 from '../../assets/img/shop-shekil6.jpg';
//import img8 from '../../assets/img/shop-shekil8.jpg';
//import img5 from '../../assets/img/shop-shekil2.jpg';
import ShopProductsImage from "./ShopProductsImage";
import shopGalleryData from "../data/shopGalleryData";
import { Link } from "react-router-dom";


const ShopProducts = () => {

    const [shopGalleryDataImg, setShopGalleryDataImg] = useState(shopGalleryData[1]);

    /*const allHoverImages = document.querySelectorAll(".hover-container div img");
    const imgContainer = document.querySelector(".img-container");

    window.addEventListener("DOMContentLoaded", () =>{
        allHoverImages[0].parentElement.classList.add('active');
    });
    allHoverImages.forEach((image) => {
        image.addEventListener("mouseover", () =>{
            imgContainer.querySelector("img").src = image.src;
        });
    });*/

  return (

    <div>
        <Navbar />
        <div className="main-wrapper">
            <div className="container">
                <div className="product-div">
                    <div className="product-div-left">
                        <div className="img-container">
                            <img src={img2} className='shopGalleryData' alt="" />
                        </div>
                        <div className="hover-container">

                        {shopGalleryData?.shopGalleryData.map((item,index)=>{
                  return(
                      < ShopProductsImage
                      img={item.img}
                      item={item}
                      key={index}
                      onClick={()=>setShopGalleryDataImg(shopGalleryDataImg)}
                      />
                     )
                 })}
                            {/*<div>
                                <img src={img3} alt="" />
                            </div>
                            <div>
                                <img src={img4} alt="" />
                            </div>
                            <div>
                                <img src={img6} alt="" />
                            </div>
                            <div>
                                <img src={img8} alt="" />
                            </div>
                            <div>
                                <img src={img5} alt="" />
                           </div*/}
                        </div>
                    </div>
                    <div className="product-div-right">
                        <span className="product-name">(New)
                        Modern House Sofa
                        </span>
                        <span className="product-price"> $450</span>
                        <div className="product-rating">
                            <span><i className='fas fa-star'/></span>
                            <span><i className='fas fa-star'/></span>
                            <span><i className='fas fa-star'/></span>
                            <span><i className='fas fa-star'/></span>
                            <span><i className='fas fa-star'/></span>
                        </div>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem praesentium distinctio eos, tempore nemo ducimus maxime voluptatem fugiat velit, voluptatibus, odio atque. Consequatur soluta necessitatibus tempore ratione hic blanditiis ullam praesentium veritatis aliquid. Itaque, cumque!</p>
                        <div className="btn-groups">
                        <Link to="shop"><button type='button' className='add-cart-btn'><i className="fas fa-shopping-cart"/>add to cart</button></Link>
                            <button type='button' className='buy-now-btn'><i className="fas fa-wallet"/>buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopProducts