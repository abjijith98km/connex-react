import React,{useEffect , useState} from 'react'
import LatestBlogs from '../components/LatestBlogs';
import {useLocation} from "react-router-dom";
import LoadingText from '../components/LoadingText';

const PressDetails = () => {
const [pressDetail, setpressDetail] = useState()
const search = useLocation().search;
const id = new URLSearchParams(search).get('id');
const press = window.location.href.split("/").pop()
  useEffect(() => {
    // fetch(`https://safqat.pixelflames.net/wp-json/wp/v2/posts?id=${id}&post_type=press`)
    fetch(`https://safqat.pixelflames.net/wp-json/wp/v2/posts?slug={${press}}&post_type=press`)
      .then(response => response.json())
      .then(json => {setpressDetail(json) ;})  

    return () => {
      // second
    }
  }, [])
  return (
    <>
    
<section className="pixel_blog_listing_section">
  <div className="container">
    <div className="pixel_blog_listing_section_wrap row">
      <div className="col-md-8 col-12">
        {
          pressDetail?.post_details ? <PressDetailsBlock data={pressDetail?.post_details[0]}/>  : 
        <LoadingText />
        }
      </div>
      <div className="col-md-4 col-12">
        <LatestBlogs url='https://safqat.pixelflames.net/wp-json/wp/post/featured_press' type='press' currentId={id} />
      </div>

    </div>
  </div>
</section>
    </>
  )
}

const PressDetailsBlock = ({data})=>{
  return(
    <div className="pixel_blogs_details_block">
  
    <div className="blogs_heaader">
      <h2>{data?.name}</h2>
      <div dangerouslySetInnerHTML={{__html:data?.post_excerpt}}></div>
      {/* <p>{props.data.post_excerpt}</p> */}
      <div className="profile_banner">
        <div className="profile_image">
          <img src={data?.author.profile} alt="img"/>
        </div>
        <div className="profile_body">
          <h4>{data?.author.name}</h4>
          <h4>{data?.post_date}</h4>
        </div>
      </div>
    </div>
    <div className="blogs_feature_image press_feature_image">
      <img src={data?.featured_image.src} alt="image"/>
    </div>
    <div className="blogs_bodycopy" dangerouslySetInnerHTML={{__html:data?.post_content}}>
     
        
    </div>
  </div>
  )
}

export default PressDetails;