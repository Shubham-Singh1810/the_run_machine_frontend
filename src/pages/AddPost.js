import React from "react";

function AddPost() {
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
          <input className="form-control " type="file" />
          <label className="text-light fontRaleway mb-2 mt-3">Add Caption</label>
          <textarea className="form-control " rows={4} placeholder="Caption" />
          <button className="btn btn-primary w-100 mt-3"> Post</button>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
