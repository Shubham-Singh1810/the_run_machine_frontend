import React from 'react'

function CommentBox() {
  return (
    <div className='d-flex my-4'>
        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" style={{height:"50px", width:"50px", borderRadius:"50%"}} className='img-fluid border'/>
        <p style={{lineHeight:"18px"}} className='font15 my-auto ms-2 me-3'><b >Shubham Singh</b> mentioned you in a comment "Hello world" </p>
        <div className='text-center'>
        <i className='fa fa-heart-o mt-2'></i>
        <b className='font12 ' style={{position:"relative", bottom:"8px"}}>123</b>
        </div>
    </div>
  )
}

export default CommentBox