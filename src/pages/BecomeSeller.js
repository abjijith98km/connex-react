import React,{useEffect , useState} from 'react';
import { Banner } from './Press';
import BuySafqatBanner from '../components/BuySafqatBanner';
import BuyerFeatureBlock from '../components/BuyerFeatureBlock';
import SafqatBenefits from '../components/SafqatBenefits';
import WhyRegister from '../components/WhyRegister';
import WeHelpYouSucceeed from '../components/WeHelpYouSucceeed';
const BecomeSeller = () => {
  const [becomeSellerData, setbecomeSellerData] = useState()
  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=become-a-seller')
    .then(response => response.json())
    .then(json => setbecomeSellerData(json[0].acf))
  
    return () => {
      
    }
  }, [])
  return (
    <>
      <Banner bannerTitle={becomeSellerData?.banner.main_head} bannerImage={becomeSellerData?.banner.banner_image} bannerSubtitle={becomeSellerData?.banner.sub_text} bannerBtn={becomeSellerData?.banner.cta_button}/>

     <BuyerFeatureBlock services={becomeSellerData?.services}/>

    <BuySafqatBanner registerData={becomeSellerData?.registration_seller}/>

    <WhyRegister />

    <SafqatBenefits featureImage={becomeSellerData?.benefits_image} mainTitle={becomeSellerData?.benefits_title} benefits={becomeSellerData?.benefits_safqat} highlight={becomeSellerData?.benefits_highlight}/>

    <WeHelpYouSucceeed mainTitle={becomeSellerData?.features_title} features={becomeSellerData?.features_list}/>

    <Banner bannerTitle={becomeSellerData?.join_safqat.title} bannerImage={becomeSellerData?.join_safqat.background_image} bannerSubtitle={becomeSellerData?.join_safqat.description} bannerBtn={becomeSellerData?.join_safqat.cta_button}/>

    </>
  )
}
export default BecomeSeller