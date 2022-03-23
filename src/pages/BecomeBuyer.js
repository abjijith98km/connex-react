import React ,{useEffect , useState} from 'react'
import BuyerFeatureBlock from '../components/BuyerFeatureBlock'
import BuySafqatBanner from '../components/BuySafqatBanner'
import LoadingText from '../components/LoadingText'
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
  <LoadingText/>
    
  }
  </>
  )
}

export default BecomeBuyer