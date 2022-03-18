import React, {useEffect , useState} from 'react'
import CategorySelector from '../components/CategorySelector'
import InstagramGrid from '../components/InstagramGrid'
import LatestBlogs from '../components/LatestBlogs'
import { Link } from 'react-router-dom'
import {useLocation} from "react-router-dom";
import BlogsSuggestions from '../components/BlogsSuggestions'
const BlogDetail = () => {
  const [blogsDetail, setblogsDetail] = useState()
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  useEffect(() => {
    fetch(`https://safqat.pixelflames.net/wp-json/wp/v2/posts?id=${id}&post_type=blog`)
    .then(response => response.json())
    .then(json => { setblogsDetail(json)})    
    return () => {
      
    }
  }, [])
  return (
    <><section className="pixel_blog_listing_section">
    <div className="container">
      <div className="pixel_blog_listing_section_wrap row">
        <div className="col-md-8 col-12">
          {
            blogsDetail?.post_details[0] ?
            (
               <BlogDetailBlock key={blogsDetail?.post_details[0].id} category={blogsDetail?.post_details[0].category} title={blogsDetail?.post_details[0].name} date={blogsDetail?.post_details[0].post_date} mainImage={blogsDetail?.post_details[0].featured_image.src} content={blogsDetail?.post_details[0].post_content}/>)

            :<h4 className='text-center text-primary'>Loading...</h4>
          }
        
         <BlogsSuggestions currentId={id} currentCategory={blogsDetail?.post_details[0].category}/>
        </div>
        <div className="col-md-4 col-12">
          <LatestBlogs url='https://safqat.pixelflames.net/wp-json/wp/post/featured_blog' type='blog' currentId={id}/>
         <CategorySelector title='Categoris' url='https://safqat.pixelflames.net/wp-json/wp/v2/blog-category'/>
        <InstagramGrid />
        </div>
  
      </div>
    </div>
  </section></>
  )
}

export const BlogDetailBlock=(props)=>{
  return(
    <div className="pixel_blogs_details_block">
    <ul className="blogs_breadcrumb">
      <li>Blog</li>
      <li>{props.category}</li>
    </ul>
    <div className="blogs_heaader">
      <h2>{props.title}</h2>
      <span>{props.date}</span>
    </div>
    <div className="blogs_feature_image">
      <img src={props.mainImage} alt="image"/>
    </div>
    <div className="blogs_bodycopy" dangerouslySetInnerHTML={{__html:props.content}}>
    </div>
  </div>
  )
}

export default BlogDetail;