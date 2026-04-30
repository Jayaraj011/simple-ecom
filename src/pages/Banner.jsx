import React from 'react'
import Banner1 from '../assets/Banner/Banner2.jpg'
import Banner2 from '../assets/Banner/Banner4.jpg'
import Banner3 from '../assets/Banner/Banner3.jpg'
const Banner = () => {
  return (
   
        
            <div id="carouselExample" className="carousel slide mt-3">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Banner3} style={{height:"300px"}} className="d-block  w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Banner2}  style={{height:"300px"}} className="d-block  w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Banner1} style={{height:"300px"}} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          
      

  )
}
export default Banner;