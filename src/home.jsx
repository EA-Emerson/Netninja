import BlogList from "./bloglist";
import useFetch from "./usefetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs = {blogs} title = 'All Blogs'/>}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'Emerson')} title = "Emerson's Blogs"/> */}
        </div>
     );
}
 
export default Home;