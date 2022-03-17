import React,{useEffect , useState} from 'react'
import { Link } from 'react-router-dom';

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
          <Banner bannerImage={data.acf.banner_image} bannerTitle={data.acf.banner_title}/>
      )
      })
    }
      <PressFeedbacksGrid list={pressList?.post_details}/>


    </>
  )
}

export const Banner =({bannerTitle , bannerImage , bannerBtn ,bannerSubtitle})=>{
  return(
    <section className="banner">
  <div className="container">
    <div className="about-banner buyer-banner">
      <div className="about-img">
        <picture>
          {/* <!-- <source media="(max-width:550px)" srcset="uploads/home/sing-m.webp" type="image/webp"> --> */}
          {/* <!-- <source media="(max-width:550px)" srcset="uploads/home/sing-m.jpg" type="image/jpeg"> --> */}
          {/* <source srcset="uploads/buyer-lp/buyer-banner.webp" type="image/webp"/> */}
          {/* <source srcset="uploads/buyer-lp/buyer-banner.jpg" type="image/jpeg"/> */}
          <img src={bannerImage} alt="about banner"/>
        </picture>
      </div>
      <div className="banner-cnt ">
        <h2 className="mw-550">{bannerTitle}</h2>
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
                <h5>{item.name}</h5>{item.id}
                <div dangerouslySetInnerHTML={{__html:item.post_excerpt}}></div>
                {/* <p>{item.post_excerpt}</p> */}
                <Link to={`/press-details?id=${item.id}`} className="read_more">Read more</Link>
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