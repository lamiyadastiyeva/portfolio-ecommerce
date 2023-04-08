import React from 'react';

const AboutItemPage = (props) => {
  return (
    <div>
      <div className="box">
        <img className='whiteClass' src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>     
  )
}
export default AboutItemPage