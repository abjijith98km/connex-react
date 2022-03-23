import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <nav className='container'>
    <ul className='d-flex pt-5 pb-5 flex-wrap'>
      <li className='mr-5 mb-4'>
        <Link to='/press'>Press listing</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/press-details/dafza-appoints-marius-ciavola-to-assume-the-role-of-chief-executive-officer-of-tradeling-the-regions-leading-b2b-emarketplace-2'>Press details</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/blog-details/test'>Blog details</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/blog-listing'>Blog listing</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/become-buyer'>Become buyer</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/become-seller'>Become seller</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/about-us'>About us</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/terms'>Terms & conditions</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/return'>Return policy</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/privacy'>privacy policy</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/careers'>Careers</Link>
      </li>
      <li className='mr-5 mb-4'>
        <Link to='/faq'>Faq</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Home;