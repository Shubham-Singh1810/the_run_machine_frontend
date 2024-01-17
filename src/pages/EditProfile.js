import { useEffect, useState } from "react";
import { useGlobalState } from "../context/ContextProvider";
import {updateUserApi} from "../services/user.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function EditProfile() {
  const { globalState, setGlobalState } = useGlobalState();
  const [showPassword, setShowPassword] = useState(false);
  const [editFormData, setEditFormData] = useState({
    _id:globalState?.user?._id,
    userName: globalState?.user?.userName,
    bio: globalState?.user?.bio,
    webLink: globalState?.user?.webLink,
    profilePic: "",
    profilePicPrev:globalState?.user?.profilePic
  });
  const updateUser = async () => {
    try {
      let formData = new FormData();
      formData.append("_id",globalState?.user?._id)
      formData.append("userName", editFormData.userName)
      formData.append("bio",editFormData.bio)
      formData.append("webLink",editFormData.webLink)
      formData.append("profilePic",editFormData.profilePic)
      let response = await updateUserApi(formData);
      if(response.data.message=="User Updated Successfully"){
        toast.success("User Updated Successfully")
        localStorage.setItem("the_run_machine_user", JSON.stringify(response?.data?.data));
        setInterval(()=>{

          window.location.reload();
        },500)
      }else{
        toast.error("Something went wrong")
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  };
  const setFormDataFunc= ()=>{
    setEditFormData({
      _id:globalState?.user?._id,
      userName: globalState?.user?.userName,
      bio: globalState?.user?.bio,
      webLink: globalState?.user?.webLink,
      profilePic: "",
      profilePicPrev:globalState?.user?.profilePic
    })
  }
  useEffect(()=>{
    setFormDataFunc()
  }, [])
  return (
    <>
      <div className="bg-dark text-light p-3 pb-5">
        <div className="d-flex justify-content-between">
          <h4 className="my-auto">Edit Profile </h4>
          <button type="button" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Password <i className="fa fa-edit"></i>
          </button>
        </div>
        <div className="userInfo my-3">
          <img className="img-fluid rounded w-100" src= {editFormData?.profilePicPrev ==""? "https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg": editFormData?.profilePicPrev} />
          <div className="my-1">
            <label>Change Profile</label>
            <input className="form-control " type="file" onChange={(e)=>{setEditFormData({...editFormData, profilePic:e.target.files[0], profilePicPrev:URL.createObjectURL(e.target.files[0])})}} />
          </div>
          <div className="my-1">
            <label>User Name</label>
            <input
              className="form-control "
              value={editFormData.userName}
              type="text"
              placeholder="Edit UserName"
              onChange={(e) => setEditFormData({ ...editFormData, userName: e.target.value })}
            />
          </div>
          <div className="my-1">
            <label>Website</label>
            <input
              className="form-control "
              value={editFormData.webLink}
              type="text"
              placeholder="Edit Website Url"
              onChange={(e) => setEditFormData({ ...editFormData, webLink: e.target.value })}
            />
          </div>
          <div className="mt-1 mb-3">
            <label>Bio</label>
            <textarea
              className="form-control "
              value={editFormData.bio}
              type="text"
              placeholder="Edit Bio"
              onChange={(e) => setEditFormData({ ...editFormData, bio: e.target.value })}
            />
          </div>
          <button className="btn btn-primary btn-sm w-100 mb-5" onClick={updateUser}>
            Update Profile
          </button>
        </div>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Reset Password
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="d-flex justify-content-between">
                <label className="mb-2">Password</label>
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  className={"mt-2 fa " + (showPassword ? "fa-eye" : "fa-eye-slash")}
                ></i>
              </div>
              <input
                className="form-control"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Old Password"
              />
              <label className="my-2">New Password</label>
              <input className="form-control" placeholder="Enter Old Password" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default EditProfile;
