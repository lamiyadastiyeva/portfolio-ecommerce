import React from 'react';

const TeamItemPage = (props) => {
  return (
    <div>
      <div className="cards">
        <div className="imgBox">
          <img src={props.img} alt="" />
        </div>
        <div className="content">
          <div className="details">
            <h2>{props.title}<br /><span>{props.text}</span></h2>
            <ul className="social_icons">
              <li><a href><i className="fab fa-facebook-f" /></a></li>
              <li><a href><i className="fab fa-twitter" /></a></li>
              <li><a href><i className="fab fa-linkedin-in" /></a></li>
              <li><a href><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TeamItemPage