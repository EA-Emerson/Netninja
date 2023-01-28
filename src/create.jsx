import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() =>{
            setIsPending(false)
            console.log('new blog added')
        })
        navigate('/')
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    required
                />

                <label>Blog Body:</label>
                <textarea 
                    name="" 
                    id="" 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} >
                </textarea>

                <label>Blog Author:</label>
                <select name="" id=""
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Aghogho">Aghogho</option>
                    <option value="Emerson">Emerson</option>
                </select>
                <div className="btndiv">
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog</button>}
                </div>
            </form>
        </div>
     );
}
 
export default Create;