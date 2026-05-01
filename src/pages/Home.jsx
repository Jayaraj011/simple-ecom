// import image from '../assets/banner2.webp'
import card1 from '../assets/bed.jpg'
import card2 from '../assets/Ac.jpg'
import card3 from '../assets/hthetre.jpg'
import cart4 from '../assets/pen-rbg.png'
import cart5 from '../assets/costa-del-mar-wingman-sunglasses-in-gold-metal.jpg'
import cart6 from '../assets/tv.jpg'
import{Link} from 'react-router-dom'
import Footer from './Footer.jsx'
import Banner from './Banner.jsx'
 const Home = ({addcarts,carts}) => {
  const productcart=[
    {
      id:1,
      image:card1,
      title:"bed",
      price:250
    },
    {
      id:2,
      image:card2,
      title:"Ac",
      price:450
    },
    {
      id:3,
      image:card3,
      title:"Speaker",
      price:550
    },
    {
      id:4,
      image:cart4,
      title:"Pendrive",
      price:300
    },
    {
      id:5,
      image:cart5,
      title:"sunglass",
      price:150
    },
    {
      id:6,
      image:cart6,
      title:"Tv",
      price:300
      
    },
  ]
  return (
    <div>
      <div>
        {/* <img src={image} height="250px" width="100%"/>     */}
        <Banner/>
</div>
   <div className='container'>
     <div className='cart'>
       <div className='cart-title text-center  text-danger  my-5 '><h1 className='text-center'>Product</h1></div>
       <div className='cart-body'>
        {productcart.map((data)=>{
          return(
            <div key={data.id} className='card text-center d-inline-block px-1 py-1 mx-2 my-1 shadow p-3 mb-5 bg-body-tertiary rounded' style={{width:"350px"}} >
             <img src={data.image} className="img-fluid object-fit-fill" alt="..." style={{width:"200px", height:"120px"}}/>
             <div className='card-body'>
             <h1 className='card-title '>{data.title}</h1>
             <p className='card-text text-success fw-bold'>{data.price}</p>
             <button href='' className='btn btn-primary' onClick={()=>addcarts(data)}>Add to Cart</button>
             
             </div>
              </div>
          )
        })}
        <h5>Cart Items: {carts.length}</h5>
             <Link to="/cart" className="btn btn-success">Go to Cart</Link>
       </div>
     </div>
   </div>
   <Footer/>
    </div>
  )
}
export default Home;
