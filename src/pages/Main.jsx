import MyNavbar from "../components/MyNavbar"
import BlogCard from '../components/BlogCard'
import { useState,useEffect } from "react"


const Main = () => {
  const [blogs, setBlogs] = useState();
  // const URL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch(process.env.REACT_APP_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response was not ok");
        }
        return response.json();
      })
      .then((data) => setBlogs(data))
      .catch((error) => console.error("error:", error));
  };
  return (
    <div>
      <MyNavbar blogs={blogs}></MyNavbar>
      <BlogCard setBlogs={setBlogs} blogs={blogs}></BlogCard>
    </div>
  );
}

export default Main