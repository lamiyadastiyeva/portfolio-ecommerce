import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img2 from "../../assets/img/home-sec2-sek2.jpg";
import img3 from "../../assets/img/home-sec2-sek3.jpg";
import img4 from "../../assets/img/home-sec2-sek4.jpg";
import img5 from "../../assets/img/home-sec2-sek5.jpg";



class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider  className='pt-5 pt-5'  {...settings}>
          <div>
            <img className='img-fluid' src={img2} alt="" />
          </div>
          <div>
          <img className='img-fluid' src={img3} alt="" />
          </div>
          <div>
          <img className='img-fluid' src={img5} alt="" />
          </div>
          <div>
          <img className='img-fluid' src={img4} alt="" />
          </div>
          <div>
          <img className='img-fluid' src={img3} alt="" />
          </div>
          <div>
          <img className='img-fluid' src={img5} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default PauseOnHover;




