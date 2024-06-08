import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data,changedata]=useState(

        [
            
            
            {"name":"divya","no":2,"price":3000},
            {"name":"kavya","no":78,"price":3098},
            {"name":"diya","no":99,"price":5000},
            {"name":"miya","no":7,"price":9000},
            {"name":"siya","no":8,"price":9000},
            {"name":"riya","no":9,"price":7000},
            {"name":"kiya","no":1,"price":6000},
            {"name":"laya","no":3,"price":5000},
            {"name":"naya","no":4,"price":3000},
            {"name":"raya","no":5,"price":2000},
            {"name":"hara","no":6,"price":1000},










            
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