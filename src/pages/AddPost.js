import React, { useState } from "react";
import { create } from "../services/post.service";
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
function AddPost() {
  const navigate = useNavigate()
  const [postData, setPostData] = useState({
    postImg: "",
    caption: "",
    userId: JSON.parse(localStorage.getItem("the_run_machine_user"))._id,
  });
const formValidation = ()=>{
  let result = true
  if(postData.postImg ==""){
    toast.error("Post Image is required field")
    result=false
  }
  return result
}
const [showLoader, setShowLoader]=useState(false)
  const handlePostSubmit = async () => {
    if(formValidation()){
      setShowLoader(true)
      try {
        
        const formData = new FormData;
        formData.append("postImg", postData.postImg);
        formData.append("caption", postData.caption);
        formData.append("userId", postData.userId);
        let response = await create(formData);
        if(response.data.message=="Post created Successfully"){
          toast.success("Post created Successfully");
          setPostData({
            postImg: "",
            caption: "",
          })
          setTimeout(()=>{
            navigate("/feed")
          }, 1500)
        }
        else{
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
      setShowLoader(false)
    }
    
  };
  return (
    <div>
      <div className="bg-dark vh-100">
        <h4 className="px-4 pt-4 fontRaleway text-light">Create Post</h4>
        <div className="mx-4 pt-2 ">
          <img
            className="img-fluid rounded"
            src="https://tse4.mm.bing.net/th?id=OIP.F00dCf4bXxX0J-qEEf4qIQHaD6&pid=Api&P=0&h=180"
          />
          <br />
          <label className="text-light fontRaleway mb-2 mt-3">Upload Picture</label>
          <input className="form-control " type="file" onChange={(e)=>setPostData({...postData, postImg:e.target.files[0]})}/>
          <label className="text-light fontRaleway mb-2 mt-3">Add Caption</label>
          <textarea className="form-control " rows={4} placeholder="Caption"  onChange={(e)=> setPostData({...postData, caption:e.target.value})}/>
          {showLoader ? (
              <div className="d-flex justify-content-center mt-3">
                <div class="spinner-border text-center text-light" role="status"></div>
                <span class="mt-1 ms-2 text-light">Posting...</span>
              </div>
            ) : (
              <button className="btn btn-primary w-100 mt-3" onClick={handlePostSubmit}>Post</button>
            )}
          
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AddPost;
