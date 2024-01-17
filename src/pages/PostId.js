import React from 'react'

function PostId() {
  return (
    <div className="post mt-3">
      <div className="postNav px-2">
        <div className="userAvtar d-flex ">
            <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
            <div className="mt-1 ms-2">
                <p className="mb-0 fontCursive">Shubham Singh</p>
                <p className="text-primary" style={{marginTop:"-5px", fontSize:"12px"}}>Follow</p>
            </div>
        </div>
      </div> 
      <div className="postImg">
        <img className="img-fluid" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
      </div>
      <div className="postFooter">
        <div className="postAction d-flex justify-content-between">
            <div className="d-flex">
                <h3 className="mx-2"><i className="fa fa-heart-o"></i></h3>
                {/* <h3 className="ms-2"><i className="fa fa-comment-o"></i></h3> */}
                <img src="/commentBox.jpeg" style={{height:"22px", marginTop:"3px"}}/>
            </div>
            <h1 className="mx-2"><i className="fa fa-save"></i></h1>
        </div>
        <p className="mx-2 font12 mb-0"><b>1,000 Likes</b></p>
        <div className="postCaption mx-2">
            <p className="mb-0"><b className="fontRaleway font15">Shubham </b><span className="fontRaleway font15">My First Post</span></p>
            <p className="fontCursive"><u>View all Comments</u></p>
        </div>
      </div>
    </div>
  )
}

export default PostId