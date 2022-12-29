import Header from "./components/Header.js";
import React from "react";
import { Routes , Route} from "react-router-dom";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import Blog from "./components/Blog.js";
import AddBlog from "./components/AddBlog.js";
import BlogDetail from "./components/BlogDetail.js";
function App() {
  return  <React.Fragment>
          <header>
              <Header/>
          </header>
          <main>
              <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/:id" element={<BlogDetail/>}/>
                <Route path="/blog/add" element={<AddBlog/>}/>
              </Routes>
          </main>
      </React.Fragment>
}

export default App;
