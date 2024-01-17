import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Story() {
  const [showAll, setShowAll] = useState(false);
  const [showReactionBox, setShowReactionBox] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    }, 10000)
  })
  return (
    <>
      <div className="storyLoader">
        <div className="progressLine"></div>
      </div>
      <div className="postNav px-2">
        <div className="userAvtar pt-2 d-flex ">
          <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
          <div className="mt-1 ms-2">
            <p className="mb-0 fontCursive">Shubham Singh</p>
            <p className="text-primary" style={{ marginTop: "-5px", fontSize: "12px" }}>
              Follow
            </p>
          </div>
        </div>
      </div>
      <div className=" d-flex">
        <div className="">
          <img
            className="img-fluid"
            src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTxtdTAGf3obR31GaqP0LrXhTittDPioE0Vd4YKrvpiYh_GOSAKgtgybCle6jBSry-T56yloU16PxwPsPY"
          />
          {false ? (
            <>
              {showReactionBox && (
                <div className="reactionBox d-flex justify-content-around">
                  <b className=""> &#128514;</b>
                  <b className=""> &#128525;</b>
                  <b className=""> &#128545;</b>
                  <b className=""> &#128546;</b>
                  <b className=""> &#128520;</b>
                  <b className=""> &#128536;</b>
                </div>
              )}
              <p className="mx-1">
                <u onClick={() => setShowReactionBox(!showReactionBox)}>
                  {showReactionBox ? <>Hide Reaction Box</> : <>Choose a reaction</>}
                </u>
              </p>
              <h2 className="mx-1 fontMono">You Reacted : <b>&#128536;</b></h2>
            </>
          ) : (
            <div>
              <div className="viewContainer d-flex justify-content-between mx-2">
                <div>
                  <div className="d-flex viewIcon">
                    <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                    <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                    <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                    {/* <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" /> */}
                  </div>
                  <p className="fontMono font15">
                    <u onClick={() => setShowAll(!showAll)}>
                      {showAll ? (
                        <>Show Few</>
                      ) : (
                        <>
                          View all:<i>123</i>
                        </>
                      )}
                    </u>
                  </p>
                </div>
                <p className="my-auto text-secondary" style={{ fontSize: "25px" }}>
                  <i className="fa fa-trash-o"></i>
                </p>
              </div>
              <div className="px-2">
                {showAll && (
                  <div>
                    <div className="userAvtar pt-2 d-flex justify-content-between">
                      <div className="d-flex">
                        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                        <div className="mt-1 ms-2">
                          <p className="mb-0 fontCursive">Shubham Singh</p>
                          <p className="text-primary" style={{ marginTop: "-5px", fontSize: "12px" }}>
                            Follow
                          </p>
                        </div>
                      </div>
                      <b className="my-auto" style={{ fontSize: "30px" }}>
                        {" "}
                        &#128536;
                      </b>
                    </div>
                    <div className="userAvtar pt-2 d-flex justify-content-between">
                      <div className="d-flex">
                        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                        <div className="mt-1 ms-2">
                          <p className="mb-0 fontCursive">Shubham Singh</p>
                          <p className="text-primary" style={{ marginTop: "-5px", fontSize: "12px" }}>
                            Follow
                          </p>
                        </div>
                      </div>
                      <b className="my-auto" style={{ fontSize: "30px" }}>
                        {" "}
                        &#128536;
                      </b>
                    </div>
                    <div className="userAvtar pt-2 d-flex justify-content-between">
                      <div className="d-flex">
                        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                        <div className="mt-1 ms-2">
                          <p className="mb-0 fontCursive">Shubham Singh</p>
                          <p className="text-primary" style={{ marginTop: "-5px", fontSize: "12px" }}>
                            Follow
                          </p>
                        </div>
                      </div>
                      <b className="my-auto" style={{ fontSize: "30px" }}>
                        {" "}
                        &#128536;
                      </b>
                    </div>
                    <div className="userAvtar pt-2 d-flex justify-content-between">
                      <div className="d-flex">
                        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                        <div className="mt-1 ms-2">
                          <p className="mb-0 fontCursive">Shubham Singh</p>
                          <p className="text-primary" style={{ marginTop: "-5px", fontSize: "12px" }}>
                            Follow
                          </p>
                        </div>
                      </div>
                      <b className="my-auto" style={{ fontSize: "30px" }}>
                        {" "}
                        &#128536;
                      </b>
                    </div>
                    <div className="userAvtar pt-2 d-flex justify-content-between">
                      <div className="d-flex">
                        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                        <div className="mt-1 ms-2">
                          <p className="mb-0 fontCursive">Shubham Singh</p>
                          <p className="text-primary" style={{ marginTop: "-5px", fontSize: "12px" }}>
                            Follow
                          </p>
                        </div>
                      </div>
                      <b className="my-auto" style={{ fontSize: "30px" }}>
                        {" "}
                        &#128536;
                      </b>
                    </div>
                    <div className="userAvtar pt-2 d-flex justify-content-between">
                      <div className="d-flex">
                        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                        <div className="mt-1 ms-2">
                          <p className="mb-0 fontCursive">Shubham Singh</p>
                          <p className="text-primary" style={{ marginTop: "-5px", fontSize: "12px" }}>
                            Follow
                          </p>
                        </div>
                      </div>
                      <b className="my-auto" style={{ fontSize: "30px" }}>
                        {" "}
                        &#128536;
                      </b>
                    </div>
                    <div className="userAvtar pt-2 d-flex justify-content-between">
                      <div className="d-flex">
                        <img src="https://cdn.wallpapersafari.com/56/41/ugjeCc.jpg" />
                        <div className="mt-1 ms-2">
                          <p className="mb-0 fontCursive">Shubham Singh</p>
                          <p className="text-primary" style={{ marginTop: "-5px", fontSize: "12px" }}>
                            Follow
                          </p>
                        </div>
                      </div>
                      <b className="my-auto" style={{ fontSize: "30px" }}>
                        {" "}
                        &#128536;
                      </b>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Story;
