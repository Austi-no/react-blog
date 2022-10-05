import React, { useState } from "react";
import { useHistory } from "react-router-dom";



const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Victor');
    const [isPending, setisPending] = useState(false);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = { title, body, author }
        setisPending(true)
        fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log("new blog added!");
            setisPending(false)
            // history.go(-1)
            history.push("/")
        })
    }

    return (
        <div className="create">
            <h2>Add new Post</h2>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    required
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Body:</label>
                <textarea

                    required
                    defaultValue={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <select
                    defaultValue={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Austin">Austin</option>
                    <option value="Victor">Victor</option>
                    <option value="Glorious">Glorious</option>
                </select>
                {!isPending && <button >Add Post</button>}
                {isPending && <button disabled>Adding Post...</button>}


            </form>
        </div>

    );
}

export default Create;