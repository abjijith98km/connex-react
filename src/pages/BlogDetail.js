import React, {useEffect , useState} from 'react'
import CategorySelector from '../components/CategorySelector'
import EmailNewsletter from '../components/EmailNewsletter'
import InstagramGrid from '../components/InstagramGrid'
import LatestBlogs from '../components/LatestBlogs'

const BlogDetail = () => {
  const [blogsDetail, setblogsDetail] = useState()
  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/wp/v2/posts?id=432&post_type=blog')
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
          blogsDetail?.post_details?.map(data =>{
            return <BlogDetailBlock key={data.id} title={data.name} date={data.post_date} mainImage={data.featured_image.src} content={data.post_content}/>
          })
          }
        
          <ul className="blogs_listing_block">
            <h3>You may also like</h3>
            <li >
              <a href="#" className="blog">
                <div className="blog_image_wrap">
                  <img src="./uploads/press/blog.jpg" alt="image"/>
                </div>
                <div className="blog_details">
                  <span>December 28, 2020</span>
                  <h4>Does a pandemic require a special type of leadership?</h4>
                  <p>The COVID-19 pandemic, with all its challenges and restrictions, has been a prime example of what is commonly known …</p>
                </div>
              </a>
            </li>
            <li >
              <a href="#" className="blog">
                <div className="blog_image_wrap">
                  <img src="./uploads/press/blog.jpg" alt="image"/>
                </div>
                <div className="blog_details">
                  <span>December 28, 2020</span>
                  <h4>The B2B marketplace revolution—Tapping into a multi-trillion-dollar industry</h4>
                  <p>The COVID-19 pandemic, with all its challenges and restrictions, has been commonly known … </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-12">
          <LatestBlogs />
         <CategorySelector title='Categoris' url='https://safqat.pixelflames.net/wp-json/wp/v2/blog-category'/>
        <InstagramGrid />
          <EmailNewsletter/>
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
      <li>About safqat</li>
      <li>Thought Leadership</li>
    </ul>
    <div className="blogs_heaader">
      <h2>{props.title}</h2>
      <span>{props.date}</span>
    </div>
    <div className="blogs_feature_image">
      <img src={props.mainImage} alt="image"/>
    </div>
    <div className="blogs_bodycopy" dangerouslySetInnerHTML={{__html:props.content}}>
{/* <p>

      {}
</p> */}
        
    </div>
  </div>
  )
}

export default BlogDetail;