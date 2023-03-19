import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="blog_project/" element={<Home />} />
        <Route path="blog_project/blogs" element={<Blogs />} />
        {/* <Route path="/blog/:idBlog" */}
        {/* https://jsonplaceholder.typicode.com/posts/1/comments */}
        {/* https://jsonplaceholder.typicode.com/guide/ */}

        <Route path="blog_project/wishlist" element={<Wishlist />} />
      </Routes>
      <h2>Footer</h2>
      {/* FOOTER */}
    </div>
  );
}

export default App;
