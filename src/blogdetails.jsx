import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method:'DELETE'
        }).then(() => {
            navigate('/');
        })
    }
    // const blogEdit = () => {
    //     navigate('edit')
    // }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article >
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                    {/* <button onClick={blogEdit}>Edit Blog</button> */}
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;