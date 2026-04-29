

const Cart = ({carts,removecart}) => {
     const handleRemove = (id) => {
    removecart(id);
    alert("Item removed from cart");
  };
  return (
    <div className="container">
       <h2 className="text-center my-4">Cart items</h2>
       {carts.length===0?(
        <p>NO items in cart</p>
       ):(
        carts.map((item,index)=>(
          <div key={index} className="card d-inline-block mx-2 text-center p-3 my-2" style={{maxWidth:"300px"}}>
            
                        <div className='card-body' style={{maxWidth:"300px"}}>
                          <img src={item.image} className="img-fluid object-fit-fill" alt="..." style={{width:"200px", height:"120px"}}/>
                        <h1 className='card-title '>{item.title}</h1>
                        <p className='card-text text-success fw-bold'>{item.price}</p>
                          <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Remove</button>
                        
                        </div>
            </div>
        ))
       )}
    </div>
  )
}
export default Cart;
