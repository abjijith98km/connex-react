import React,{useState , useEffect} from 'react'
import { Banner } from './Press'
import CategorySelector from '../components/CategorySelector'
import EmailNewsletter from '../components/EmailNewsletter'
import InstagramGrid from '../components/InstagramGrid'
import LatestBlogs from '../components/LatestBlogs'
import Pagination from '../components/Pagination'
const BlogListing = () => {
  const [blogBanner, setblogBanner] = useState()
  const [blogList, setblogList] = useState()
  // const [currentPage, setcurrentPage] = useState(1)
  // const [itemsPerPage, setitemsPerPage] = useState(2)
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

  // var totalItems = blogList?.post_details.length
  //  var lastIndex = currentPage * itemsPerPage
  //   var firstIndex = lastIndex - itemsPerPage
  //   var currentList = blogList?.post_details.slice(firstIndex , lastIndex)
  //   const paginate=(number)=>{
  //     setcurrentPage(number)
  //   }
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
         <BlogList list={blogList?.post_details } />
     {/* <Pagination total={totalItems} itemperpage={itemsPerPage} paginate={paginate} currentPage={currentPage}/> */}
     <Pagination />

    
      </div>
      <div className="col-md-4 col-12">
         <LatestBlogs />
         <CategorySelector title='Categoris'  url='https://safqat.pixelflames.net/wp-json/wp/v2/blog-category'/>
          <InstagramGrid />
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
        props.list?.map(item =>{
          return (
            <li  key={item.id}>
              <a href="#" className="blog">
            <div className="blog_image_wrap">
              <img src={item.featured_image.src} alt="image"/>
            </div>
            <div className="blog_details">
              <span>{item.post_date}</span>
              <h4>{item.name}</h4>
              <div dangerouslySetInnerHTML={{__html:item.post_excerpt}}></div>
            </div>
              </a>
          </li>
          )
        })
      }
  </ul>
  )
}
export default BlogListing