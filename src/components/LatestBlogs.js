import React,{useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
const LatestBlogs = ({url,type,currentId}) => {
  const [featuredBlog, setfeaturedBlog] = useState()
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => {setfeaturedBlog(json) ;})  
    return () => {
      // second
    }
  }, [])
  return (

    <ul className="latest_post_listing">
    <h3>{featuredBlog?.heading}</h3>

    { type == 'blog' &&
      featuredBlog?.featured_blog.filter(blog => blog.id != currentId).slice(1,4).map(blog =>{
        return(
          <li key={blog.id}>
          <a href={`/blog-details?id=${blog.id}`} className="post">
            <div className="post_image">
              <img src={blog.featured_image} alt="image"/>
            </div>
            <div className="post_bodycopy">
              <span>{blog.post_date}</span>
              <h5>{blog.title}</h5>
            </div>
          </a>
        </li>
        )
      })

    }
    {
      type == 'press' && 
      featuredBlog?.featured_press.filter(press => press.id != currentId).slice(1,4).map(press =>{
        return(
          <li key={press.id}>
          <a href={`/press-details?id=${press.id}`} className="post">
            <div className="post_image">
              <img src={press.featured_image} alt="image"/>
            </div>
            <div className="post_bodycopy">
              <span>{press.post_date}</span>
              <h5>{press.title}</h5>
            </div>
          </a>
        </li>
        )
      })
    }

  </ul>
  )
}

export default LatestBlogs