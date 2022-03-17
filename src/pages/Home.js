import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <nav>
    <ul className='d-flex pt-5 pb-5'>
      <li>
        <Link to='/press'>Press listing</Link>
      </li>
      <li>
        <Link to='/press-details'>Press details</Link>
      </li>
      <li>
        <Link to='/blog-details'>Blog details</Link>
      </li>
      <li>
        <Link to='/blog-listing'>Blog listing</Link>
      </li>
      <li>
        <Link to='/become-buyer'>Become buyer</Link>
      </li>
      <li>
        <Link to='/become-seller'>Become seller</Link>
      </li>
      <li>
        <Link to='/supplier-about'>supplier about</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Home;