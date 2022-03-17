import React from 'react'

const LatestBlogs = () => {
  return (
    <ul className="latest_post_listing">
    <h3>Latest posts</h3>
    <li >
      <a href="#" className="post">
        <div className="post_image">
          <img src="./uploads/press/blog.jpg" alt="image"/>
        </div>
        <div className="post_bodycopy">
          <span>December 28, 2020</span>
          <h5>Does a pandemic require a special type of leadership?</h5>
        </div>
      </a>
    </li>
    <li >
      <a href="#" className="post">
      <div className="post_image">
        <img src="./uploads/press/blog.jpg" alt="image"/>
      </div>
      <div className="post_bodycopy">
        <span>December 28, 2020</span>
        <h5>Does a pandemic require a special type of leadership?</h5>
      </div>
      </a>
  </li>
  </ul>
  )
}

export default LatestBlogs