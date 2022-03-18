import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <nav className='container'>
    <ul className='d-flex pt-5 pb-5 flex-wrap-wrap'>
      <li className='mr-5'>
        <Link to='/press'>Press listing</Link>
      </li>
      <li className='mr-5'>
        <Link to='/press-details?id=245'>Press details</Link>
      </li>
      <li className='mr-5'>
        <Link to='/blog-details?id=432'>Blog details</Link>
      </li>
      <li className='mr-5'>
        <Link to='/blog-listing'>Blog listing</Link>
      </li>
      <li className='mr-5'>
        <Link to='/become-buyer'>Become buyer</Link>
      </li>
      <li className='mr-5'>
        <Link to='/become-seller'>Become seller</Link>
      </li>
      <li className='mr-5'>
        <Link to='/supplier-about'>supplier about</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Home;