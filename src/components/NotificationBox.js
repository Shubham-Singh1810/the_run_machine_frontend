import React from 'react'

function NotificationBox() {
  return (
    <div className='d-flex my-4'>
        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" style={{height:"50px", width:"50px", borderRadius:"50%"}} className='img-fluid border'/>
        <p style={{lineHeight:"18px"}} className='font15 my-auto mx-2'><b >Shubham Singh</b> mentioned you in a comment "Hello world" </p>
        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" style={{height:"50px", width:"40px", borderRadius:"5%"}} className='img-fluid '/>
    </div>
  )
}

export default NotificationBox