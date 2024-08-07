import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";


const ProductDisplay = (props) => {
  const {product} = props ;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{product.old_price}TND</div>
          <div className="productdisplay-right-price-new">{product.new_price}TND</div>
        </div>
        <div className="productdisplay-right-description">
        Classic Cotton Crewneck T-Shirt
            Elevate your everyday style with our Classic Cotton Crewneck T-Shirt. 
            Crafted from 100% premium cotton, this versatile tee offers exceptional comfort and a soft, breathable feel
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CARD</button>
        <p className='productdisplay-right-category'><span>Category : </span> Women , T-Shirt , Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags : </span> Modern , Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
