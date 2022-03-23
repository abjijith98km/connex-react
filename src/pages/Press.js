import React,{useEffect , useState} from 'react'
import { Link } from 'react-router-dom';
import LoadingText from '../components/LoadingText';

const Press = () => {
  const [pressData, setpressData] = useState();
  const [pressList, setpressList] = useState('')
  useEffect(() => {
    // banner data 
    fetch('https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=press')
    .then(response => response.json())
    .then(json => {setpressData(json) ;})  
// list data 
    fetch('https://safqat.pixelflames.net/wp-json/wp/v2/posts?post_type=press')
    .then(response => response.json())
    .then(json => {setpressList(json) ;})  
    return () => {
      // second
    }
  }, [])
  
  return (
    <>
    {
      pressData?.map(data =>{
        return(
          <Banner key={data.id} bannerImage={data.acf.banner_image} bannerTitle={data.acf.banner_title} wide={true}/>
      )
      })
    }
    {
      pressList?.post_details ? <PressFeedbacksGrid list={pressList?.post_details}/>
      :
    <LoadingText/>
    }


    </>
  )
}

export const Banner =({bannerTitle , bannerImage , bannerBtn ,bannerSubtitle , wide})=>{
  return(
    <section className="banner">
  <div className="container">
    <div className="about-banner buyer-banner">
      <div className="about-img">
        <picture>
          <img src={bannerImage} alt="about banner"/>
        </picture>
      </div>
      <div className="banner-cnt ">
        <h2 className={wide?`mw-550`:''}>{bannerTitle}</h2>
        {
          bannerSubtitle &&
          <p>{bannerSubtitle}</p> 
        }
        {
          bannerBtn &&
          <a href={bannerBtn.url} className="cta-btn" target={bannerBtn.target}>{bannerBtn.title}</a>
        }
      </div>
    </div>
  </div>
</section>
  )
}

export const PressFeedbacksGrid =(props)=>{

  return(
    <><section className="pixel_press_feedbacks">
    <div className="container">
      <div className="row">
        {
          props.list?.map(item =>{
            return(
              <div className="col-lg-4 col-md-6 col-12" key={item.id}>
              <div className="pixel_press_card">
                <div className="press_img_wrap">
                  <img src={item.logo.src} alt="image"/>
                </div>
                <h5>{item.name}</h5>
                <div dangerouslySetInnerHTML={{__html:item.post_excerpt}}></div>
                {/* <p>{item.post_excerpt}</p> */}
                <Link to={`/press-details/${item.slug}`} className="read_more">Read more</Link>
              </div>
            </div>
            )
          })
        }

      </div>
    </div>
  </section></>
  )
}
export default Press;