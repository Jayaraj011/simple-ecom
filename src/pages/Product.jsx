
import { useState } from 'react'

import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import data from '../product/Data'


const Products = () => {
 const[record,setRecord]=useState(4)
 const[page,setPage]=useState(1)
 
 
 const lr=record*page  //4*1=4
 const fr=lr-record   //4-4=0
 const mydata=data.slice(fr,lr)
 const changepage=(p)=>{
    setPage(p)
 }
  return (
    <div className="container py-4">

      <h1 className="text-center text-danger mb-4">
        Product
      </h1>

    
      <div className="row g-4">

        {mydata.map((d) => (
          <div key={d.id} className="col-md-3 col-sm-6">

            <div className="card h-100 shadow-sm border-0 text-center">

              <img
                src={d.image}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
                alt="product"
              />

              <div className="card-body">
                <h5 className="card-title">{d.title}</h5>
                <p className="card-text fw-bold text-success">
                  {d.price}
                </p>
             
                <button className='btn btn-success'>Add to cart</button>
              </div>

            </div>

          </div>
        ))}
       <Pagination record={record} total={data.length} changepage={changepage}/>
      </div>

    
    
    </div>
  )
}

export default Products;