import React from 'react'

const Pagination = ({record,total,changepage}) => {
    const n=Math.ceil(total/record)
    
    let arr=[]
    console.log(arr)
    for(let i=1;i<=n;i++)
    {
      arr.push(i)
    }
  return (
    <div >
      <ul className='pagination'>
        {arr.map((i)=>(
              <li className='page-item'>
            <a onClick={()=>{changepage(i)}} className='page-link text-danger'>{i}</a>
        </li>
        ))}
         
      
       
      </ul>
    </div>
  )
}

export default Pagination