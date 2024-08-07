import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to Zita Shop
            Discover the ultimate online shopping experience at Zita Shop, 
            where style meets convenience. Our carefully curated collection of high-quality apparel,
            accessories, and lifestyle products ensures you always find something unique and trendy
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
