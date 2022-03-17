import React from 'react'

const InstagramGrid = () => {
  return (
    <ul className="latest_post_listing">
    <h3>Instagram</h3>
    <div className="row instagram">
      <a href="#" className="col-4">
        <img src="./uploads/press/insta.jpg" alt="image"/>
      </a>
      <a href="#" className="col-4">
        <img src="./uploads/press/insta.jpg" alt="image"/>
      </a>  
      <a href="#" className="col-4">
        <img src="./uploads/press/insta.jpg" alt="image"/>
      </a>  
      <a href="" className="col-4">
        <img src="./uploads/press/insta.jpg" alt="image"/>
      </a> 
       <a href="#" className="col-4">
        <img src="./uploads/press/insta.jpg" alt="image"/>
      </a> 
       <a href="#" className="col-4">
        <img src="./uploads/press/insta.jpg" alt="image"/>
      </a>
    </div>
  </ul>
  )
}

export default InstagramGrid;