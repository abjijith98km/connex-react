import React from 'react'

const CategorySelector = (props) => {
  return (
    <ul className="latest_post_listing">
    <h3>{props.title}</h3>
    <li className="category"><a href="#">Business</a></li>
    <li className="category"><a href="#">Beauty & Personal Care</a></li>
    <li className="category"><a href="#">Health & Wellness</a></li>
    <li className="category"><a href="#">Home, Garden & Furniture</a></li>
    <li className="category"><a href="#">Machinery and Equipments</a></li>
  </ul>
  )
}

export default CategorySelector;