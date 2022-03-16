import React,{useEffect , useState} from 'react'

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

export const Banner =(props)=>{
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
          <img src={props.bannerImage} alt="about banner"/>
        </picture>
      </div>
      <div className="banner-cnt ">
        <h2 className="mw-550">{props.bannerTitle}</h2>
        {/* <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy</p> --> */}
        {/* <!-- <button className="cta-btn">Check our suppliers</button> --> */}
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
                <p>{item.post_excerpt}</p>
                <a href={item.permalink} className="read_more">Read more</a>
              </div>
            </div>
            )
          })
        }
        {/* <div className="col-lg-4 col-md-6 col-12">
          <div className="pixel_press_card">
            <div className="press_img_wrap">
              <img src="./uploads/press/image 22.svg" alt="image"/>
            </div>
            <h5>DAFZA Appoints Marius Ciavola to assume the role of Chief Executive Officer of Tradeling, the region’s leading B2B eMarketplace</h5>
            <p>Dubai Airport Freezone Authority (DAFZA) has announced the departure of start-up veteran Muhammad Chbib, who is leaving the...</p>
            <a href="#" className="read_more">Read more</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="pixel_press_card">
            <div className="press_img_wrap">
              <img src="./uploads/press/2.svg" alt="image"/>
            </div>
            <h5>UAE's 5 most prominent women in tech world</h5>
            <p>The list includes Ming Hu, co-founder of Women In Tech Dubai, which seeks to create an educational and supportive community for women...</p>
            <a href="#" className="read_more">Read more</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="pixel_press_card">
            <div className="press_img_wrap">
              <img src="./uploads/press/3.svg" alt="image"/>
            </div>
            <h5>E-commerce to keep clicking in UAE</h5>
            <p>E-commerce has certainly proved to be a winner in 2020, defying all the odds as the Covid-19 outbreak accelerated a surge in online sales...</p>
            <a href="#" className="read_more">Read more</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="pixel_press_card">
            <div className="press_img_wrap">
              <img src="./uploads/press/4.svg" alt="image"/>
            </div>
            <h5>Money & Me: ‘Don’t waste your money on trying to please others’ Muhammad Chbib has invested in entrepreneurial ventures, real estate and technology stocks</h5>
            <p>E-commerce has certainly proved to be a winner in 2020, defying all the odds as the...</p>
            <a href="#" className="read_more">Read more</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="pixel_press_card">
            <div className="press_img_wrap">
              <img src="./uploads/press/5.svg" alt="image"/>
            </div>
            <h5>Tradeling CEO Outlines Dubai’s B2B eCommerce Modernization Game Plan</h5>
            <p>Dubai is a city that has for centuries operated as a keystone of B2B trade across the Middle East, North Africa and Asia (MENA) region...</p>
            <a href="#" className="read_more">Read more</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="pixel_press_card">
            <div className="press_img_wrap">
              <img src="./uploads/press/image 22.svg" alt="image"/>
            </div>
            <h5>Explainer: What is the scope of growth for the GCC’s B2B e-commerce industry?</h5>
            <p>The pandemic has helped boost digital marketplaces in the region, opines Muhammad Chbib, CEO at Tradeling</p>
            <a href="#" className="read_more">Read more</a>
          </div>
        </div> */}
      </div>
    </div>
  </section></>
  )
}
export default Press;