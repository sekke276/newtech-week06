import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/homePage";
import PostForm from "./pages/postPage";
import PostDetail from "./pages/detailPage";
import EditForm from "./pages/editPage";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Main />}></Route>
        <Route path="/post/:id" Component={PostDetail}></Route>
        <Route path="/post/" Component={PostForm}></Route>
        <Route path="/post/edit/:id" Component={EditForm}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
