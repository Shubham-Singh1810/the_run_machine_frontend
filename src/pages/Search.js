import React from 'react'
import {useNavigate} from "react-router-dom"
function Search() {
  const navigate = useNavigate()
  return (
    <>
    <div className='m-2 mt-3 mb-0'>
      <input className='form-control' placeholder='Search '/>
      <div className='d-flex justify-content-end'>
      <i className='fa fa-search' style={{position:"relative", bottom:"28px", right:"15px"}}></i>
      </div>
    </div>
    <div className='row m-0'>
      <div className='col-4 p-0 border' onClick={()=>navigate("/post/123")}>
        <img className='img-fluid' src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
      </div>
      <div className='col-4 p-0 border'>
        <img className='img-fluid' src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
      </div>
      <div className='col-4 p-0 border'>
        <img className='img-fluid' src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
      </div>
      <div className='col-4 p-0 border'>
        <img className='img-fluid' src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
      </div>
    </div>
    </>
  )
}

export default Search