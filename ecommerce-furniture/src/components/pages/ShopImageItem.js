import React from 'react';

const ShopImageItem = (props) => {
  return (
    <div>
        <div className="gallery-item">
            <div className="gallery-item-inner">
                <img src={props.img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ShopImageItem