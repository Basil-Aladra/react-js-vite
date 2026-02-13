import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

// RUN DATA FROM JSON SERVER
// npx json-server --watch data/db.json --port 8000
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);


    const handelDelete = (id) =>{
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    return (
        <div className="home">
            <BlogLists blogs={blogs} title="All Blogs" handelDelete={handelDelete}/>
        </div>
    )
}

export default Home;