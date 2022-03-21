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
    <>{
      becomeSellerData?
      <>  <Banner bannerTitle={becomeSellerData?.banner.main_head} bannerImage={becomeSellerData?.banner.banner_image} bannerSubtitle={becomeSellerData?.banner.sub_text} bannerBtn={becomeSellerData?.banner.cta_button}/>

     <BuyerFeatureBlock services={becomeSellerData?.services}/>

    <BuySafqatBanner registerData={becomeSellerData?.registration_seller}/>

    <WhyRegister mainTitle={becomeSellerData?.register_step_title} subTitle={becomeSellerData?.register_step_sub_text} rows={becomeSellerData?.registration_steps}/>

    <SafqatBenefits featureImage={becomeSellerData?.benefits_image} mainTitle={becomeSellerData?.benefits_title} benefits={becomeSellerData?.benefits_safqat} highlight={becomeSellerData?.benefits_highlight}/>

    <WeHelpYouSucceeed mainTitle={becomeSellerData?.features_title} features={becomeSellerData?.features_list}/>

    <Banner bannerTitle={becomeSellerData?.join_safqat.title} bannerImage={becomeSellerData?.join_safqat.background_image} bannerSubtitle={becomeSellerData?.join_safqat.description} bannerBtn={becomeSellerData?.join_safqat.cta_button}/>
 </>     :
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
export default BecomeSeller