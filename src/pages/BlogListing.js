import React,{useState , useEffect} from 'react'
import { Banner } from './Press'
import CategorySelector from '../components/CategorySelector'
import InstagramGrid from '../components/InstagramGrid'
import LatestBlogs from '../components/LatestBlogs'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import {useLocation} from "react-router-dom";
import LoadingText from '../components/LoadingText'

const BlogListing = () => {
  const [blogBanner, setblogBanner] = useState()
  const search = useLocation().search;
  const categoryId = new URLSearchParams(search).get('category');
const slug = window.location.href.split("/").pop()

  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=blog')
    .then(response => response.json())
    .then(json => {setblogBanner(json) ;})  

 
    return () => {
      // second
    }
  }, [])

  return (
    <>
    {
      blogBanner?.map(data =>{
        return <Banner key={data.id} bannerImage={data.acf.banner_image} bannerTitle={data.acf.banner_title} wide={true}/>
      })
    }
   
    <section className="pixel_blog_listing_section">
  <div className="container">
    <div className="pixel_blog_listing_section_wrap row">
      <div className="col-md-8 col-12">
        {
          categoryId? 
          
          <BlogList url={`https://safqat.pixelflames.net/wp-json/wp/v2/posts?post_type=blog&category=${categoryId}`} />
           :
           <BlogList  url='https://safqat.pixelflames.net/wp-json/wp/v2/posts?post_type=blog'/>  
        }
      
      </div>
      <div className="col-md-4 col-12">
         <LatestBlogs url='https://safqat.pixelflames.net/wp-json/wp/post/featured_blog' type='blog'/>
         <CategorySelector title='Categories'  url='https://safqat.pixelflames.net/wp-json/wp/v2/blog-category' />
          <InstagramGrid />
      </div>
    </div>
  </div>
</section>
    </>
  )
}

const BlogList= ({url})=>{

  useEffect(() => {
   getData(url)
   
  
    return () => {
    }
    }, [])
    const getData = async (url)=>{
      await fetch(url)
      .then(response => response.json())
      .then(json => {setblogList(json) ;})  
    }
    const [blogList, setblogList] = useState()
    const [currentPage, setcurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(8)
    var totalItems = blogList?.post_details.length;
    var indexOfLast = currentPage * itemsPerPage;
    var indexOfOne = indexOfLast - itemsPerPage;
    var posts = blogList?.post_details.slice(indexOfOne, indexOfLast)
    var totalPages = Math.ceil(totalItems / itemsPerPage);

    const changePagination =(number)=>{
        setcurrentPage(number)
      }
      const handlePaginate =(data)=>{
          setcurrentPage(data.selected + 1)
        }
  const generateLink=()=>{
    return '#'
  }
  return(
    <>
      
      {
        posts? 
    (<ul className="blogs_listing_block">
      {  posts?.map(item =>{
          return (
            <li  key={item.id}>
              <Link className="blog" to={`/blog-details/${item.slug}`}>
                <div className="blog_image_wrap">
                  <img src={item.featured_image.src} alt="image"/>
                </div>
                <div className="blog_details">
                  <span>{item.post_date}</span>
                  <h4>{item.name}</h4>
                  <div dangerouslySetInnerHTML={{__html:item.post_excerpt}}></div>
                </div>
              </Link>
          </li>
          )
        })}
        </ul>)
        :
       <LoadingText/>
      }


  {
           totalPages > 1 &&
         <div className="pagination-wrap justify-content-start">
            <span onClick={()=>changePagination(1)} >
                  <a href='#'>First</a>
                </span>
            <ReactPaginate pageRangeDisplayed={2} hrefBuilder={generateLink}  pageCount={totalPages} breakClassName={'a-disabled'} breakLinkClassName={'a-disabled'} pageRangeDisplayed={2} marginPagesDisplayed={2}  containerClassName={' a-pagination'} onPageChange={handlePaginate}  previousLabel={<img src="uploads/products/left-ar.svg" />} activeClassName={'active'}	 breakLabel={"..."} nextLabel={<img src="uploads/products/right-ar.svg" />} pageClassName={'a-selected'} forcePage={currentPage - 1}/>
            <span onClick={()=>changePagination(totalPages)} >
                  <a  href='#'>Last</a>
                </span>
         </div>
         }
    </>
  )
}
export default BlogListing