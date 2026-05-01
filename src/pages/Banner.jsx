import React from 'react'
import banner1 from '../assets/banner/banner2.jpg'
import banner2 from '../assets/banner/banner4.jpg'
import banner3 from '../assets/banner/banner3.jpg'
const Banner = () => {
  return (
   
        
            <div id="carouselExample" className="carousel slide mt-3">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner3} style={{height:"300px"}} className="d-block  w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner2}  style={{height:"300px"}} className="d-block  w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner1} style={{height:"300px"}} className="d-block w-100" alt="..."/>
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