import React from 'react'
import BlogLists from './BlogLists';
import useFetch from './useFetch';

const Home = () => {

  const { data, isPending, error } = useFetch("http://localhost:8000/posts")


  const handleDelete = (id) => {
    // const newPosts = data.filter(p => p.id !== id)
    // setPosts(newPosts)
  }



  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading Data...</div>}
      {data && <BlogLists posts={data} title="All Posts" handleDelete={handleDelete} />}

    </div>
  )
}

export default Home