import {useState} from "react";
import UserStoryGola from "../components/UserStoryGola";
import Post from "../components/Post";
import { useNavigate  } from "react-router-dom";
import { useGlobalState } from '../context/ContextProvider';
function MyProfile() {
  const {globalState, setGlobalState } = useGlobalState();
  const navigate = useNavigate()
    const[showPost, setShowPost] = useState("grid")
  return (
    <div>
      <div className="d-flex justify-content-between p-2 ">
        <div className="brandLogo">{globalState?.user?.userName}</div>
        <div className="notificationIcon d-flex">
          <h4 className=" mt-1 px-1 border rounded" onClick={()=>navigate("/add_post")}>
            <i className="fa fa-plus" ></i>
          </h4>
        </div>
      </div>
      <div className="profileDetailsSection px-2 d-flex justify-content-between">
        <div className="profileAvtar ">
          <img className="img-fluid" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
        </div>
        <div className="d-flex userStatics  my-auto justify-content-between">
          <div className="mx-2">
            <p className=" mb-0 text-center">
              <b>144</b>
            </p>
            <h6 className="fontMono text-center mb-0">Posts</h6>
          </div>
          <div className="mx-2">
            <p className=" mb-0 text-center">
              <b>144</b>
            </p>
            <h6 className="fontMono text-center mb-0">Followers</h6>
          </div>
          <div className="mx-2">
            <p className=" mb-0 text-center">
              <b>144</b>
            </p>
            <h6 className="fontMono text-center mb-0">Following</h6>
          </div>
        </div>
      </div>
      <div className="userBioSection mx-2">
        <p className="fontRaleway font15 mb-0">
          <b>{globalState?.user?.name}</b>
        </p>
        <p className="fontMono mb-0 font15">{globalState?.user?.bio}</p>
        <a className="font15" target="_blank" href={globalState?.user?.webLink}>
          Visit Website
        </a>
      </div>
      <div className="actionBtns my-2 d-flex justify-content-between">
        <div className="w-100 m-2">
          <button className="btn w-100 btn-sm btn-primary" onClick={()=>navigate("/edit_profile")}>Edit Profile</button>
        </div>
        <div className="w-100 m-2">
          <button className="btn w-100 btn-sm btn-danger" onClick={()=>{localStorage.removeItem("the_run_machine_user"); window.location.reload()}}>Log Out</button>
        </div>
      </div>
      <div className="userStoryContainer my-2">
        <UserStoryGola />
        <UserStoryGola />
        <UserStoryGola />
        <UserStoryGola />
        <UserStoryGola />
        <UserStoryGola />
        <UserStoryGola />
      </div>
      <div className="postNav  d-flex justify-content-around">
      <h4 className={"rounded px-2 " +(showPost=="grid" && " border" )} onClick={()=>setShowPost("grid")}>
          <i className="fa fa-table"></i>
        </h4>
        <h4 className={"rounded px-2 " +(showPost=="table" && " border" )}  onClick={()=>setShowPost("table")}>
          <i className="fa fa-play"></i>
        </h4>
        <h4 className={"rounded px-2 " +(showPost=="saved" && " border" )}  onClick={()=>setShowPost("saved")}>
          <i className="fa fa-save"></i>
        </h4>
      </div>
      {showPost=="grid" && <div className="gridPost pb-5 mb-4 row m-0">
        <div className="col-4 p-0">
            <img className="img-fluid border" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
        </div>
        <div className="col-4 p-0">
            <img className="img-fluid border" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
        </div>
        <div className="col-4 p-0">
            <img className="img-fluid border" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
        </div>
        <div className="col-4 p-0">
            <img className="img-fluid border" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
        </div>
        <div className="col-4 p-0">
            <img className="img-fluid border" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
        </div>
        <div className="col-4 p-0">
            <img className="img-fluid border" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
        </div><div className="col-4 p-0">
            <img className="img-fluid border" src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg"/>
        </div>
      </div>
      }
      {showPost=="table" && <div className="savedPost pb-5 mb-4">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>}
      {showPost=="saved" && <div className="savedPost pb-5 mb-4">
        <Post/> 
        <Post/>
      </div>}
    </div>
  );
}

export default MyProfile;
