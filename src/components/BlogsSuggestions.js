import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BlogsSuggestions = ({currentId, currentCategory}) => {
  const [suggestedBlog, setsuggestedBlog] = useState()
  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/wp/v2/posts?post_type=blog')
    .then(response => response.json())
    .then(json => {setsuggestedBlog(json) ;})  
    return () => {
      // second
    }
  }, [])
  var posts = suggestedBlog?.post_details.filter(blog => blog?.id != currentId && (blog?.category.toLowerCase().includes(currentCategory?.toLowerCase()) || currentCategory?.toLowerCase().includes(blog?.category.toLowerCase())))
  return (
    <>
{  posts?.length >=1 &&

    <ul className="blogs_listing_block">
    <h3>You may also like</h3>
    {
      posts?.map(post =>{
        return(
          <li key={post.id}>
          <a href={`/blog-details/${post.slug}`} className="blog">
            <div className="blog_image_wrap">
              <img src={post.featured_image.src} alt="image"/>
            </div>
            <div className="blog_details">
              <span>{post.post_date }</span>
              <h4>{post.name}</h4>
              <div dangerouslySetInnerHTML={{__html:post.post_excerpt}}></div>
            </div>
          </a>
        </li>
        )
      })
    }
  
  </ul>
}
  </>
  )
}

export default BlogsSuggestions