import React ,{useEffect , useState} from 'react'
import BuyerFeatureBlock from '../components/BuyerFeatureBlock'
import BuySafqatBanner from '../components/BuySafqatBanner'
import VAD from '../components/VAD'
import WhyRegister from '../components/WhyRegister'
import { Banner } from './Press'

const BecomeBuyer = () => {
  const [becomeBuyerData, setbecomeBuyerData] = useState()
  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=become-a-buyer')
    .then(response => response.json())
    .then(json => setbecomeBuyerData(json[0].acf))
  
    return () => {
      
    }
  }, [])
  
  return (
    <>
    {
      becomeBuyerData?
    <>
      <Banner bannerTitle={becomeBuyerData?.banner.main_head} bannerImage={becomeBuyerData?.banner.banner_image} bannerSubtitle={becomeBuyerData?.banner.sub_text} bannerBtn={becomeBuyerData?.banner.cta_button}/>
    
     <BuyerFeatureBlock services={becomeBuyerData?.services}/>
    
    <BuySafqatBanner registerData={becomeBuyerData?.registration_buyer}/>

    <WhyRegister  mainTitle={becomeBuyerData?.register_step_title} subTitle={becomeBuyerData?.register_step_sub_text} rows={becomeBuyerData?.registration_steps}/>
    
    <VAD title={becomeBuyerData?.value_added_title} list={becomeBuyerData?.value_added_buying}/>
    </>
    :
    <div className='d-flex justif justify-content-center'>
    <h3 className='text-black text-center font-md'>Loading... </h3>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ background: 'rgb(241, 242, 243)', display: 'block', shapeRendering: 'auto'}} width="38px" height="38px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#1d0e0b" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
      </svg>
  </div>
    
  }
  </>
  )
}

export default BecomeBuyer