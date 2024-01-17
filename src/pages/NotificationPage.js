import React from "react";
import NotificationBox from "../components/NotificationBox";
import {useNavigate} from "react-router-dom"
function NotificationPage() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="notificationHeader d-flex justify-content-between p-3" style={{ background: "whitesmoke" }}>
        <h5 className="fontRaleway mb-0">Notifications</h5>
        <p className="mb-0" onClick={()=>navigate("/")}>
          <i className="fa fa-close"></i>
        </p>
      </div>
      <div className="notificationContainer mt-3 mb-5 pb-5 mx-3">
        <NotificationBox />
        <NotificationBox />
        <NotificationBox />
        <NotificationBox />
        <NotificationBox />
        <hr className=""/>
        <p className="text-secondary">Older Notifications</p>
        <NotificationBox />
        <NotificationBox />
        <NotificationBox />
        <NotificationBox />
        <NotificationBox />
      </div>
    </div>
  );
}

export default NotificationPage;
