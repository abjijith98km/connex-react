import React,{useState , useEffect} from 'react'
import AboutDescriptionBlock from '../components/AboutDescriptionBlock'
import HelpingYouSucceed from '../components/HelpingYouSucceed'
import { Banner } from './Press'

const AboutUs = () => {
  const [aboutUsData, setaboutUsData] = useState()
  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=about-us')
    .then(response => response.json())
    .then(json => {setaboutUsData(json[0].acf) ;})  
    return () => {
      // second
    }
  }, [])
  return (
    <>
    <Banner bannerTitle={aboutUsData?.banner_title} bannerImage={aboutUsData?.banner_image} bannerSubtitle={aboutUsData?.banner_subtitle} bannerBtn={aboutUsData?.banner_button}/>
        <HelpingYouSucceed title={aboutUsData?.benefits_title} subTitle={aboutUsData?.benefits_sub_title} row={aboutUsData?.benefits}/>

    <AboutDescriptionBlock primaryTitle={aboutUsData?.about_title} primaryDescription={aboutUsData?.about_details} primaryRow={aboutUsData?.about_safqat} otherbenefits={aboutUsData?.other_benefits}/>
    </>
  )
}

export default AboutUs;