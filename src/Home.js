import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

// RUN DATA FROM JSON SERVER
// npx json-server --watch data/db.json --port 8000
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending , setIsPending] = useState(true);

    useEffect(()=>{
       setTimeout(()=>{
         fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json();
        })
        .then(data =>{
            setBlogs(data);
            setIsPending(false);
        })
         },1500);
    },[]);

    return (
        <div className="home">
        {isPending && <div>Loading...</div>}
           {blogs && <BlogLists blogs={blogs} title="All Blogs" />}
        </div>
    )
}

export default Home;