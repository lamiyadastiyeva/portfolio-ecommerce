import React from 'react'

const ShopProductsImage = (shopGalleryDataImg) => {
  return (
    <div>
        <div>
            <img src={shopGalleryDataImg.img} alt="" />
        </div>
    </div>
  )
}

export default ShopProductsImage