import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPage() {
  const {id} = useParams();

  return (
    <div>Blog Page for {id}</div>
  )
}

export default BlogPage