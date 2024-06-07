import React from 'react'
import Navbar from './Navbar'

const AddBooking = () => {
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">From</label>
    <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">To</label>
    <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">No of Seats</label>
    <select name="" id="" className="form-control">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


    <label htmlFor="" className="form-label">Passenger Name</label>
    <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


    <label htmlFor="" className="form-label">Price</label>
    <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <button className="btn btn-success">Submit</button>


    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default AddBooking