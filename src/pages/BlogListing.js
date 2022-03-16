import React,{useState , useEffect} from 'react'
import { Banner } from './Press'
import CategorySelector from '../components/CategorySelector'
import EmailNewsletter from '../components/EmailNewsletter'
import InstagramGrid from '../components/InstagramGrid'
import LatestBlogs from '../components/LatestBlogs'
const BlogListing = () => {
  const [blogBanner, setblogBanner] = useState()
  const [blogList, setblogList] = useState()
  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=blog')
    .then(response => response.json())
    .then(json => {setblogBanner(json) ;})  

    fetch('https://safqat.pixelflames.net/wp-json/wp/v2/posts?post_type=blog')
    .then(response => response.json())
    .then(json => {setblogList(json) ;})  
    return () => {
      // second
    }
  }, [])

  return (
    <>
    {
      blogBanner?.map(data =>{
        return <Banner bannerImage={data.acf.banner_image} bannerTitle={data.acf.banner_title}/>
      })
    }
   
    <section className="pixel_blog_listing_section">
  <div className="container">
    <div className="pixel_blog_listing_section_wrap row">
      <div className="col-md-8 col-12">
         <BlogList list={blogList } />
        <div className="pagination-wrap justify-content-start">
          <span className="">
            <a href="#">First</a>
          </span>
          <ul className="a-pagination">
            <li>
              <a href="#" className="prev-toggle">
                <img src="uploads/products/left-ar.svg" alt=""/>
              </a>
            </li>
            <li className="a-selected active">
              <a href="#" aria-current="page">10</a>
            </li>
            <li className="a-selected">
              <a href="#">11</a>
            </li>
            <li className="a-disabled" aria-disabled="true">...</li>
            <li className="a-selected">
              <a href="#">25</a>
            </li>
            <li className="a-selected">
              <a href="#">26</a>
            </li>
            <li>
              <a href="#" className="next-toggle">
                <img src="uploads/products/right-ar.svg" alt=""/>
              </a>
            </li>
          </ul>
          <span className="">
            <a href="#">Last</a>
          </span>
        </div>
      </div>
      <div className="col-md-4 col-12">
      <LatestBlogs title='Latest posts'/>
         <CategorySelector title='Categoris'/>
        <InstagramGrid title='Instagram'/>
          <EmailNewsletter/>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

const BlogList= (props)=>{
  return(
    <ul className="blogs_listing_block">
      {
        props.list?.post_details.map(item =>{
          return (
            <li className="blog" key={item.id}>
            <div className="blog_image_wrap">
              <img src={item.featured_image.src} alt="image"/>
            </div>
            <div className="blog_details">
              <span>{item.post_date}</span>
              <h4>{item.name}</h4>
              <p>{item.post_excerpt}</p>
            </div>
          </li>
          )
        })
      }
  </ul>
  )
}
export default BlogListing