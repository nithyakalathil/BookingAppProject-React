import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data,changedata]=useState(

        [
            
            
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},
            {"name":"divya","no":2,"price":3000},










            
        ]
    )
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


        <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">NO OF SEATS</th>
      <th scope="col">PRICE</th>
      
    </tr>
  </thead>
  <tbody>
   {data.map((value,index)=>{return  <tr>
      <td scope="row">{value.name}</td>
      <td>{value.no}</td>
      <td>{value.price}</td>
      
    </tr>})}
   
  </tbody>
</table>


        </div>
    </div>
</div>


    </div>
  )
}

export default Viewall