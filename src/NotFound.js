import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link  to={'/'}>Back to HomePage...</Link>
        </div>

    </div>
  )
}

export default NotFound