import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import Navbar from "../components/Navbar";
import MyProfile from "../pages/MyProfile";
import EditProfile from "../pages/EditProfile";
import Search from "../pages/Search";
import PostId from "../pages/PostId";
import AddPost from "../pages/AddPost";
import NotificationPage from "../pages/NotificationPage";
import AddComment from "../pages/AddComment";
import Story from "../pages/Story";
import PageNotFound from "../pages/PageNotFound";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post/:id" element={<PostId />} />
        <Route path="/add_post" element={<AddPost/>}/>
        <Route path="/notification" element={<NotificationPage/>}/>
        <Route path="/comment/:id" element={<AddComment/>}/>
        <Route path="/profile" element={<MyProfile/>}/>
        <Route path="/profile/:id" element={<MyProfile/>}/>
        <Route path="/edit_profile" element={<EditProfile/>}/>
        <Route path="/story/:id" element={<Story/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default AllRoutes;
