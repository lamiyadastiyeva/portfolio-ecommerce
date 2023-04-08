import React from 'react';


const HomeItemPage = (props) => {
  return (
    <div>
      <div className="imagess-box" data-aos="fade-up" data-aos-duration="5000">
         <img src={props.img} alt="" />
         <div className="intro">
           <h3>{props.title}</h3>
         </div>
      </div>
    </div>
  )
}

export default HomeItemPage