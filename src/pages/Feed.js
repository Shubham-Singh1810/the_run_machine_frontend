import React from "react";
import StoryGola from "../components/StoryGola";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";
function Feed() {
  const navigate = useNavigate()
  return (
    <div className="pb-5 mb-5">
      {/* Navbar start */}
      <div className="">
      <div className="d-flex   justify-content-between p-2 ps-3 pe-1">
        <div className="brandLogo">Run_Machine</div>
        <div className="notificationIcon d-flex" onClick={()=>navigate("/notification")}>
          <b><i className="fa fa-heart-o"></i></b>
          <div className="notificationCount bg-danger  text-light text-danger">4</div>
        </div>
      </div>
      </div>
      {/* Navbar end */}
      {/* story header  start*/}
      <div className="storyHeader py-2 px-0">
         <StoryGola/>
         <StoryGola/>
         <StoryGola/>
         <StoryGola/>
         <StoryGola/>
         <StoryGola/>
         <StoryGola/>
         <StoryGola/>
      </div>
      {/* story header  end*/}
      <div className="feedContainer">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <p className="text-center fontMono text-danger">You have already catch up every thingh</p>
      </div>
    </div>
  );
}

export default Feed;
