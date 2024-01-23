import React from "react";
import {useNavigate} from "react-router-dom"
function Post({value}) {
  const navigate = useNavigate()
  return (
    
    <div className="post">
      <div className="postNav px-2">
        <div className="userAvtar d-flex ">
            <img src={value?.userId?.profilePic}/>
            <div className="mt-1 ms-2">
                <p className="mb-0 fontCursive">{value?.userId?.name}</p>
                <p className="text-primary" style={{marginTop:"-5px", fontSize:"12px"}}>Follow</p>
            </div>
        </div>
      </div> 
      <div className="postImg">
        <img className="img-fluid w-100"   src={value?.postImg}/>
      </div>
      <div className="postFooter">
        <div className="postAction d-flex justify-content-between">
            <div className="d-flex">
                <h3 className="mx-2"><i className="fa fa-heart-o"></i></h3>
                {/* <h3 className="ms-2"><i className="fa fa-comment-o"></i></h3> */}
                <img onClick={()=>navigate("/comment/123")} src="/commentBox.jpeg" style={{height:"22px", marginTop:"3px"}}/>
            </div>
            <h1 className="mx-2"><i className="fa fa-save"></i></h1>
        </div>
        <p className="mx-2 font12 mb-0"><b>1,000 Likes</b></p>
        <div className="postCaption mx-2">
            <p className="mb-0"><b className="fontRaleway font15">Shubham </b><span className="fontRaleway font15">{value?.caption}</span></p>
            <p className="fontCursive"><u>View all Comments</u></p>
        </div>
      </div>
    </div>
  );
}

export default Post;
