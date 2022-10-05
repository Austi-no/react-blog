import React from 'react'
import { Link } from 'react-router-dom'

const BlogLists = ({ posts, title,handleDelete }) => {


    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {posts.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                    <Link to={`/post/${post.id}`}>View</Link>

                </div>
            ))}
        </div>
    )
}

export default BlogLists