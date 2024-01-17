import React from 'react'
import { useNavigate } from 'react-router-dom'
function StoryGola() {
  const navigate = useNavigate()
  return (
    <div className="storyGola" onClick={()=>navigate("/story/123")}>
    <img className="img-fluid" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
    <p className="fontMono text-center" style={{fontSize:"12px"}}>Shubham..</p>
 </div>
  )
}

export default StoryGola