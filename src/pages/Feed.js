import React, { useEffect, useState } from "react";
import StoryGola from "../components/StoryGola";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";
import { getPostList } from "../services/post.service";
function Feed() {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const getAllPostList = async () => {
    setShowLoader(true);
    try {
      let response = await getPostList();
      if (response?.data?.message == "Post list retrived Successfully") {
        setPostList(response?.data?.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("something went wrong");
    }
    setShowLoader(false);
  };
  useEffect(() => {
    getAllPostList();
  },[]);
  return (
    <div className="pb-5 mb-5">
      {/* Navbar start */}
      <div className="">
        <div className="d-flex justify-content-between p-2 ps-3 pe-1">
          <div className="brandLogo">Run_Machine</div>
          <div className="notificationIcon d-flex" onClick={() => navigate("/notification")}>
            <b>
              <i className="fa fa-heart-o"></i>
            </b>
            <div className="notificationCount bg-danger  text-light text-danger">4</div>
          </div>
        </div>
      </div>
      {/* Navbar end */}
      {/* story header  start*/}
      <div className="storyHeader py-2 px-0">
        <StoryGola />
        <StoryGola />
        <StoryGola />
        <StoryGola />
        <StoryGola />
        <StoryGola />
        <StoryGola />
        <StoryGola />
      </div>
      {/* story header  end*/}
      {showLoader ? (
        <div style={{height:"50vh"}} className="d-flex justify-content-center   align-items-center">
          <div>
            <div className=" text-center">
            <div className="spinner-border " role="status"></div>
            </div>
            
            <div>
              <span class="mt-1 ms-2 ">Featching latest feed for you...</span>
            </div>
          </div>
        </div>
      ) : (
      
        <div className="feedContainer">
          {postList?.map((v, i) => {
            return <Post  value={v}/>;
          })}
          <p className="text-center fontMono text-danger">You have already catch up every thingh</p>
        </div>
      )}
    </div>
  );
}

export default Feed;
